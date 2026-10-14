/* Cache offline de assets próprios. Links externos não são interceptados. */
const VERSION='fet-v4-2026-10-14-mapas-biblia';
const ASSETS=['./','./index.html','./styles.css','./content.js','./pesquisa.js','./app.js','./manifest.webmanifest','./icons/favicon.svg','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('fet-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(res=>{if(res.ok){let copy=res.clone();caches.open(VERSION).then(cache=>cache.put(request,copy));}return res;})).catch(()=>caches.match('./index.html')));});
