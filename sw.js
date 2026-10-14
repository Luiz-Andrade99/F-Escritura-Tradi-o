/* FET v0.3.1: páginas/scripts usam rede primeiro para evitar versões antigas da Bíblia. */
const VERSION='fet-v6-2026-10-14-fix-ptbr';
const ASSETS=[
 './','./index.html','./styles.css','./content.js',
 './pesquisa.js','./app.js','./manifest.webmanifest',
 './icons/favicon.svg','./icons/icon-512.png','./icons/apple-touch-icon.png'
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