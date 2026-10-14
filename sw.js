/* FET v0.5.1: arquivos do site usam rede primeiro para evitar versões antigas. */
const VERSION='fet-v11-2026-10-14-complementos';
const ASSETS=[
 './','./index.html','./styles.css','./content.js',
 './pesquisa.js','./ampliacao.js','./formacao.js','./app.js','./manifest.webmanifest',
 './icons/favicon.svg','./icons/icon-512.png','./icons/apple-touch-icon.png',
 './biblia-dados/parte-01.json',
 './biblia-dados/parte-02.json',
 './biblia-dados/parte-03.json',
 './biblia-dados/parte-04.json',
 './biblia-dados/parte-05.json',
 './biblia-dados/parte-06.json',
 './biblia-dados/parte-07.json',
 './biblia-dados/parte-08.json',
 './biblia-dados/parte-09.json',
 './biblia-dados/parte-10.json'
];
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(VERSION);
    await cache.addAll(ASSETS);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith('fet-')&&k!==VERSION).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  const appRoot=new URL(self.registration.scope).pathname;
  if(!url.pathname.startsWith(appRoot))return;
  const networkFirst=request.mode==='navigate'||/\.(?:js|css|html|webmanifest)$/.test(url.pathname);
  event.respondWith((async()=>{
    if(networkFirst){
      try{
        const response=await fetch(request,{cache:'no-store'});
        if(response.ok){const cache=await caches.open(VERSION);await cache.put(request,response.clone());}
        return response;
      }catch(error){
        return (await caches.match(request))||(await caches.match('./index.html'))||Response.error();
      }
    }
    const cached=await caches.match(request);
    if(cached)return cached;
    try{
      const response=await fetch(request);
      if(response.ok){const cache=await caches.open(VERSION);await cache.put(request,response.clone());}
      return response;
    }catch(error){return Response.error();}
  })());
});