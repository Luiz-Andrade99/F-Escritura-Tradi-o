(() => {
'use strict';
const data = window.FET_DATA;
const research = window.FET_PESQUISA;
const $ = (q, root=document) => root.querySelector(q);
const $$ = (q, root=document) => [...root.querySelectorAll(q)];
const esc = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const id = s => encodeURIComponent(String(s));
const link = (url,label,classes='') => `<a class="${classes}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`;
const sections = [
  {id:'inicio',label:'Início',icon:'⌂',desc:'Um caminho de estudo e fé'},
  {id:'biblia',label:'Bíblia',icon:'☷',desc:'73 livros, contexto e método de estudo'},
  {id:'missa',label:'Santa Missa',icon:'✝',desc:'Cada rito, gesto e significado'},
  {id:'igreja',label:'A Igreja',icon:'♜',desc:'Ministérios, hierarquia e vocações'},
  {id:'sacramentos',label:'Sacramentos',icon:'✦',desc:'Os sete sacramentos e os ritos'},
  {id:'idiomas',label:'Palavras originais',icon:'α',desc:'Grego e hebraico com contexto'},
  {id:'mapas',label:'Mapas bíblicos',icon:'⌖',desc:'Percursos narrados, localizações e cautelas'},
  {id:'oracoes',label:'Vida de oração',icon:'❦',desc:'Métodos, orações e devoções'},
  // Páginas de Caderno e Fontes ocultas temporariamente da interface pública.
];
const state = {filter:'Todos'};
function loadStore(){
  try {let v=JSON.parse(localStorage.getItem('fet_study_v1')||'{}'); return {notes:v.notes&&typeof v.notes==='object'&&!Array.isArray(v.notes)?v.notes:{},favorites:Array.isArray(v.favorites)?v.favorites:[],theme:v.theme==='dark'?'dark':'light'};}
  catch {return {notes:{},favorites:[],theme:'light'};}
}
let store = loadStore();
function saveStore(){try{localStorage.setItem('fet_study_v1',JSON.stringify(store));}catch(e){toast('Não foi possível salvar no dispositivo. Exporte suas anotações.');}}
function toast(message){let t=$('#toast');t.textContent=message;t.classList.add('visible');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('visible'),3400);}
function theme(){document.documentElement.dataset.theme=store.theme;$('#theme-toggle').setAttribute('aria-label',store.theme==='dark'?'Ativar tema claro':'Ativar tema escuro');}
function navHtml(s){return `<a class="nav-item ${activeSection()===s.id?'active':''}" href="#/${s.id}" ${activeSection()===s.id?'aria-current="page"':''}><span class="nav-icon" aria-hidden="true">${s.icon}</span>${esc(s.label)}</a>`;}
function activeSection(){const p=path();if(p[0]==='estudo'){const a=data.articles.find(x=>x.id===p[1]);return a?.section||'inicio';}if(p[0]==='palavra')return 'idiomas';if(p[0]==='rota')return 'mapas';if(p[0]==='livro')return 'biblia';return p[0]||'inicio';}
function renderNav(){
 $('#side-nav').innerHTML=sections.map(navHtml).join('');
 const mobile = [{id:'inicio',label:'Início',icon:'⌂'},{id:'biblia',label:'Bíblia',icon:'☷'},{id:'missa',label:'Missa',icon:'✝'},{id:'mapas',label:'Mapas',icon:'⌖'},{id:'biblioteca',label:'Mais',icon:'☰'}];
 const active=activeSection();$('#mobile-nav').innerHTML=mobile.map(s=>`<a href="#/${s.id}" class="mobile-item ${s.id===active||s.id==='biblioteca'&&['igreja','sacramentos','idiomas','oracoes','biblioteca'].includes(active)?'active':''}" ${s.id===active?'aria-current="page"':''}><span>${s.icon}</span><small>${s.label}</small></a>`).join('');
}
function path(){return location.hash.replace(/^#\/?/,'').split('/').filter(Boolean).map(x=>{try{return decodeURIComponent(x)}catch{return x}});}
function sectionHead(k,eyebrow){let s=sections.find(x=>x.id===k);return `<div class="page-header"><span class="eyebrow">${esc(eyebrow||'BIBLIOTECA DE FORMAÇÃO')}</span><h1>${esc(s?.label||'Estudos')}</h1><p>${esc(s?.desc||'Aprofunde sua formação com referências verificáveis.')}</p></div>`;}
function articleCard(a){return `<a class="study-card" href="#/estudo/${id(a.id)}"><span class="study-icon">${a.section==='missa'?'✝':a.section==='biblia'?'☷':a.section==='igreja'?'♜':a.section==='sacramentos'?'✦':'❦'}</span><span class="study-card-content"><small>${esc(a.category||a.section)}</small><span class="study-card-title" style="display:block">${esc(a.title)}</span><span class="study-card-summary">${esc(a.summary)}</span></span><span class="study-card-arrow">→</span></a>`;}
function renderHome(){
const topics=[...sections.slice(1,7),sections[7]];
const highlights=['biblia-lucas9','missa-visao','igreja-visao'].map(i=>data.articles.find(x=>x.id===i)).filter(Boolean);
const totalNotes=Object.values(store.notes).filter(x=>String(x).trim()).length;
return `<div class="container home">
 <section class="hero"><div class="hero-text"><div class="eyebrow">UMA JORNADA DE CONHECIMENTO E FÉ</div><h1>Conhecer para <i>amar.</i><br>Estudar para viver.</h1><p>Escritura, liturgia do rito romano, história e tradição da Igreja Católica Apostólica Romana em um só lugar. Explore com curiosidade e confira cada fonte.</p><a class="btn" href="#/biblia">Começar a estudar <span>→</span></a></div><div class="hero-art" aria-hidden="true"><span class="art-top">Verbum Domini</span><div class="art-orbit"><span class="art-cross">✝</span></div><span class="art-bottom">Fides et Ratio</span></div></section>
 <div class="summary-bar"><div class="summary-stat"><strong>${data.books.length}</strong><span>livros no cânon católico</span></div><div class="summary-stat"><strong>${data.articles.length}</strong><span>estudos introdutórios</span></div><div class="summary-stat"><strong>7</strong><span>sacramentos</span></div></div>
 <div class="section-title-line"><h2>Áreas de estudo</h2><a class="text-link" href="#/biblioteca">Ver toda a biblioteca →</a></div>
 <div class="grid">${topics.map(s=>`<a class="tile" href="#/${s.id}"><span class="tile-icon">${s.icon}</span><span class="tile-title">${esc(s.label)}</span><span class="tile-description">${esc(s.desc)}</span><span class="tile-arrow">↗</span></a>`).join('')}</div>
 <div class="section-title-line"><h2>Comece por aqui</h2></div>
 <div class="mini-list">${highlights.map(articleCard).join('')}</div>
 <div class="install-info"><h3>Instale no iPhone sem App Store</h3><p>Após publicar no GitHub Pages, abra o endereço no Safari, toque em Compartilhar e escolha “Adicionar à Tela de Início”. Os estudos já visitados podem funcionar offline após o primeiro carregamento.</p><p style="margin-top:10px">Esta é uma iniciativa independente de formação católica e está em revisão documental. Os estudos foram ampliados à luz do Catecismo e de fontes eclesiais, mas não possuem aprovação formal da Igreja. Confira sempre a fonte primária e procure orientação pastoral para dúvidas pessoais.</p></div>
 </div>`;
}
function renderSection(section){
 const items=data.articles.filter(a=>a.section===section);
 let cat=['Todos',...new Set(items.map(x=>x.category||'Geral'))];
 if(!cat.includes(state.filter))state.filter='Todos';
 let visible=state.filter==='Todos'?items:items.filter(x=>x.category===state.filter);
 return `<div class="container">${sectionHead(section)}<div class="section-title-line"><h2>Estudos disponíveis</h2><span class="lesson-count">${items.length} temas</span></div><div class="filterbar" role="group" aria-label="Filtrar por categoria">${cat.map(x=>`<button type="button" class="filter ${x===state.filter?'active':''}" data-filter="${esc(x)}">${esc(x)}</button>`).join('')}</div><div class="mini-list">${visible.map(articleCard).join('')}</div>${section==='missa'?`<div class="warning"><strong>Importante:</strong> a sequência e as normas aqui descritas se referem à Missa no rito romano. Dias, celebrações e normas particulares podem alterar elementos previstos.</div>`:''}</div>`;
}
function renderAll(){return `<div class="container">${sectionHead('biblioteca','SEU CAMINHO DE ESTUDO')}<div class="grid">${sections.slice(1).map(s=>`<a class="tile" href="#/${s.id}"><span class="tile-icon">${s.icon}</span><span class="tile-title">${esc(s.label)}</span><span class="tile-description">${esc(s.desc)}</span><span class="tile-arrow">↗</span></a>`).join('')}</div></div>`;}
function renderArticle(a){
 const key='article:'+a.id;
 const saved=store.favorites.includes(key);
 return `<div class="container"><div class="backline"><a class="text-link" href="#/${a.section}">← Voltar para ${esc(sections.find(x=>x.id===a.section)?.label)}</a></div><div class="article-layout"><article class="article-card"><span class="eyebrow">${esc(a.category||'ESTUDO')}</span><h1>${esc(a.title)}</h1><p class="article-lead">${esc(a.summary)}</p><div class="tags"><span class="tag">Estudo introdutório</span><span class="tag muted">Revisão documental inicial</span><span class="tag muted">Não possui aprovação eclesiástica</span>${a.scripture?`<span class="tag muted">${esc(a.scripture)}</span>`:''}</div><div class="article-body">${a.points.map(p=>`<section><h3>${esc(p.heading)}</h3><p>${esc(p.text)}</p></section>`).join('')}</div>${a.challenge?`<div class="article-tip"><strong>Leve para a vida</strong>${esc(a.challenge)}</div>`:''}<div class="article-actions"><button type="button" class="btn ${saved?'light':'secondary'}" data-favorite="${esc(key)}">${saved?'★ Nos favoritos':'☆ Salvar nos favoritos'}</button><button type="button" class="btn secondary" data-copy-prompt="${esc(a.id)}">✣ Roteiro para IA</button></div>${noteEditor(key)}</article><aside class="article-aside"><div class="aside-card"><h3>Referências principais</h3><p>Leia as fontes completas e confira o contexto original.</p>${a.sources.map(s=>link(s.url,s.label)).join('')}</div><div class="aside-card"><h3>Estudo com responsabilidade</h3><p>Texto introdutório do projeto. Não é citação literal, documento oficial, parecer de especialista nem validação doutrinária institucional.</p></div></aside></div></div>`;
}
function noteEditor(key){return `<div class="notearea"><h3>Meu caderno pessoal</h3><p>Suas anotações ficam somente neste dispositivo. Faça cópias periódicas.</p><label class="sr-only" for="note-edit">Anotação pessoal</label><textarea class="textarea" id="note-edit" data-note="${esc(key)}" placeholder="O que você aprendeu? Qual passagem deseja aprofundar?">${esc(store.notes[key]||'')}</textarea><div class="statusline" id="note-status">Salvamento automático neste dispositivo.</div></div>`;}

const FIGUEIREDO_SITE='https://santo.samytech3d.com.br/biblia';
/* Ligação para a tradução católica do Pe. Antônio Pereira de Figueiredo.
   O texto original é de domínio público; a digitalização da edição de 1950
   não foi copiada, pois identificamos possíveis falhas de OCR e necessidade
   de conferir os direitos de elementos editoriais modernos. */
const sourceBooks=Object.fromEntries(\`
Gênesis|gn|50
Êxodo|ex|40
Levítico|lv|27
Números|nm|36
Deuteronômio|dt|34
Josué|js|24
Juízes|jz|21
Rute|rt|4
1 Samuel|1sm|31
2 Samuel|2sm|24
1 Reis|1rs|22
2 Reis|2rs|25
1 Crônicas|1cr|29
2 Crônicas|2cr|36
Esdras|es|10
Neemias|ne|13
Tobias|tb|14
Judite|jdt|16
Ester|est|16
1 Macabeus|1mc|16
2 Macabeus|2mc|15
Jó|jb|42
Salmos|sl|150
Provérbios|pr|31
Eclesiastes|ecl|12
Cântico dos Cânticos|ct|8
Sabedoria|sb|19
Eclesiástico|eclo|51
Isaías|is|66
Jeremias|jr|52
Lamentações|lm|5
Baruc|br|6
Ezequiel|ez|48
Daniel|dn|14
Oseias|os|14
Joel|jl|3
Amós|am|9
Abdias|ab|1
Jonas|jn|4
Miqueias|mq|7
Naum|na|3
Habacuc|hab|3
Sofonias|sf|3
Ageu|ag|2
Zacarias|zc|14
Malaquias|ml|4
Mateus|mt|28
Marcos|mc|16
Lucas|lc|24
João|jo|21
Atos dos Apóstolos|at|28
Romanos|rm|16
1 Coríntios|1cor|16
2 Coríntios|2cor|13
Gálatas|gl|6
Efésios|ef|6
Filipenses|fl|4
Colossenses|cl|4
1 Tessalonicenses|1ts|5
2 Tessalonicenses|2ts|3
1 Timóteo|1tm|6
2 Timóteo|2tm|4
Tito|tt|3
Filêmon|fm|1
Hebreus|hb|13
Tiago|tg|5
1 Pedro|1pd|5
2 Pedro|2pd|3
1 João|1jo|5
2 João|2jo|1
3 João|3jo|1
Judas|jd|1
Apocalipse|ap|22
\`.trim().split('\n').map(row=>{const [book,slug,count]=row.trim().split('|');return [book,{slug,chapters:Number(count)}]}));
function renderBible(){
 const tests=['Antigo Testamento','Novo Testamento'];
 return \`<div class="container">\${sectionHead('biblia','A ESCRITURA SAGRADA')}<div class="warning"><strong>Leitura bíblica em português:</strong> o catálogo abre os capítulos na Bíblia Católica de Pe. Antônio Pereira de Figueiredo, disponível no site Samytech3D. A tradução original é de domínio público, mas a transcrição digital indicada pode conter erros de digitalização; compare passagens importantes com uma edição conferida. O conteúdo dos capítulos é exibido no site de origem e depende de conexão. Não copiamos nem garantimos a exatidão da edição digital de 1950.</div><div class="summary-bar"><div class="summary-stat"><strong>46</strong><span>Antigo Testamento</span></div><div class="summary-stat"><strong>27</strong><span>Novo Testamento</span></div><div class="summary-stat"><strong>73</strong><span>Livros reconhecidos no cânon católico</span></div></div><div class="section-title-line"><h2>Livros da Bíblia</h2><span class="lesson-count">Escolha um livro e capítulo</span></div><div class="book-layout">\${tests.map(test=>\`<div class="book-heading">\${test}</div>\${data.books.filter(b=>b.testament===test).map(b=>\`<a href="#/livro/\${id(b.name)}" class="book-pill">\${esc(b.name)} <span style="float:right;color:var(--gold)">↗</span></a>\`).join('')}\`).join('')}</div><div class="section-title-line"><h2>Guias para começar</h2></div><div class="mini-list">\${data.articles.filter(a=>a.section==='biblia').map(articleCard).join('')}</div></div>\`;
}
function renderBook(name){
 const b=data.books.find(b=>b.name===name);if(!b)return renderMissing();
 const info=sourceBooks[name];
 const target=info?\`\${FIGUEIREDO_SITE}/\${info.slug}\`:FIGUEIREDO_SITE;
 const chapterLinks=info?Array.from({length:info.chapters},(_,n)=>\`<a class="chapter-link" target="_blank" rel="noopener noreferrer" href="\${esc(target+'/'+(n+1))}" aria-label="Ler \${esc(name)} capítulo \${n+1} na Bíblia de Figueiredo">\${n+1}</a>\`).join(''):'';
 return \`<div class="container"><div class="backline"><a href="#/biblia" class="text-link">← Todos os livros</a></div><div class="article-card book-detail"><span class="eyebrow">\${esc(b.testament)} · \${esc(b.group)}</span><h1>\${esc(b.name)}</h1><p>Escolha um capítulo para ler a tradução de Pe. Antônio Pereira de Figueiredo em português. A leitura abre o site de origem em outra aba, com seus próprios recursos de marcação e anotação.</p><div class="warning"><strong>Nota editorial:</strong> nesta etapa os textos não foram copiados para o aplicativo. A ortografia e a numeração podem diferir de outras Bíblias; há indícios de falhas de transcrição na edição digital de referência. A leitura dos capítulos depende de internet.</div><h2>Capítulos</h2><div class="chapter-grid">\${chapterLinks||link(FIGUEIREDO_SITE,'Abrir o catálogo da Bíblia em português')}</div><div class="article-actions">\${link(target,'Ver este livro na Bíblia de Figueiredo','btn secondary')}</div>\${noteEditor('book:'+name)}</div></div>\`;
}
function renderWords(){return `<div class="container">${sectionHead('idiomas','LEITURA E PESQUISA BÍBLICA')}<div class="warning"><strong>Como ler estes estudos:</strong> cada palavra admite nuances de sentido. A etimologia isolada não prova a interpretação de um versículo; a gramática, o gênero literário, o contexto e a tradição interpretativa também importam.</div><div class="section-title-line"><h2>Palavras em contexto</h2><span class="lesson-count">${research.palavras.length} verbetes iniciais</span></div><div class="grid two">${research.palavras.map(w=>`<a href="#/palavra/${w.id}" class="tile"><span class="word-original">${esc(w.termo)}</span><span class="tile-title">${esc(w.titulo)}</span><span class="tile-description">${esc(w.transliteracao)} · ${esc(w.idioma)} · ${esc(w.referencia)}</span><span class="tile-arrow">↗</span></a>`).join('')}</div><div class="install-info"><h3>Como a IA entrará aqui?</h3><p>O projeto poderá propor perguntas, identificar paralelos e ajudar na pesquisa. Antes de publicar qualquer explicação, o texto será associado a uma edição, a uma referência e a uma classificação de evidência. Não há IA automática nem cobrança de API nesta primeira versão.</p></div></div>`;}
function renderWord(w){let key='word:'+w.id;return `<div class="container"><div class="backline"><a href="#/idiomas" class="text-link">← Palavras originais</a></div><div class="article-layout"><article class="article-card"><span class="eyebrow">${esc(w.idioma)} · ${esc(w.nivel)}</span><div class="original-title" lang="${w.idioma.startsWith('Hebraico')?'he':'el'}">${esc(w.termo)}</div><h1>${esc(w.titulo)}</h1><div class="tags"><span class="tag">${esc(w.transliteracao)}</span><span class="tag muted">${esc(w.referencia)}</span></div><div class="article-body"><section><h3>Significados encontrados</h3><ul class="meaning-list">${w.sentidos.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></section><section><h3>Contexto e interpretação</h3><p>${esc(w.analise)}</p></section><section><h3>Variações e história das interpretações</h3><ol class="meaning-list">${(w.leituras||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ol></section><section><h3>Outras passagens para comparar</h3><p>${esc(w.passagens.join(' · '))}</p></section></div><div class="article-tip"><strong>Cuidado com conclusões apressadas</strong>${esc(w.cuidado)}</div><div class="article-actions"><button class="btn secondary" type="button" data-copy-word="${w.id}">✣ Preparar análise com IA</button></div>${noteEditor(key)}</article><aside class="article-aside"><div class="aside-card"><h3>Fontes e edições</h3><p>São recursos linguísticos acadêmicos; não constituem aprovação eclesiástica.</p>${w.fontes.map(s=>link(s.url,s.label)).join('')}</div><div class="aside-card"><h3>O que falta conferir</h3><p>Comparação completa de manuscritos e variantes textuais, aparato crítico, comentários patrísticos atribuídos com precisão e validação por especialistas.</p></div></aside></div></div>`;}
function mapSvg(route){const points=route.locais;let minLon=Math.min(...points.map(p=>p.lon)),maxLon=Math.max(...points.map(p=>p.lon)),minLat=Math.min(...points.map(p=>p.lat)),maxLat=Math.max(...points.map(p=>p.lat));const latCenter=(minLat+maxLat)/2;const cos=Math.cos(latCenter*Math.PI/180);let west=minLon*cos,east=maxLon*cos;let rangeX=east-west,rangeY=maxLat-minLat;const plot={left:55,top:45,width:660,height:280};rangeX=Math.max(rangeX,.12);rangeY=Math.max(rangeY,.12);const converted=points.map(p=>({x:plot.left+((p.lon*cos-west)/rangeX)*plot.width,y:plot.top+((maxLat-p.lat)/rangeY)*plot.height}));let pathD=converted.map((p,i)=>`${i?'L':'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');let dots=converted.map((p,i)=>`<g><circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="15" fill="#7a433f" stroke="#fff9ee" stroke-width="3"/><text x="${p.x.toFixed(1)}" y="${(p.y+5).toFixed(1)}" text-anchor="middle" fill="white" font-size="13" font-weight="700">${i+1}</text></g>`).join('');return `<svg class="route-map" viewBox="0 0 770 380" role="img" aria-label="Mapa esquemático geográfico de ${esc(route.subtitulo)}: os pontos aproximados mostram a ordem do relato bíblico; as linhas retas não reproduzem estradas históricas."><defs><pattern id="map-grid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M 42 0 L 0 0 0 42" fill="none" stroke="currentColor" stroke-opacity="0.09"/></pattern></defs><rect x="0" y="0" width="770" height="380" rx="18" fill="var(--sage)"/><rect x="0" y="0" width="770" height="380" rx="18" fill="url(#map-grid)"/><path d="${pathD}" fill="none" stroke="var(--accent)" stroke-width="4" stroke-dasharray="10 8" stroke-linecap="round"/>${dots}<text x="22" y="25" fill="var(--sage-ink)" font-size="12" font-weight="700">LOCALIZAÇÕES APROXIMADAS · NORTE ↑</text><text x="20" y="361" fill="var(--sage-ink)" font-size="12">Esquema geográfico, não mapa de estradas históricas</text></svg>`;}
function renderMaps(){return `<div class="container">${sectionHead('mapas','GEOGRAFIA DAS ESCRITURAS')}<div class="warning"><strong>Transparência histórica:</strong> “lugar citado” não significa “trajeto conhecido”. Os mapas interativos exibem a geografia moderna real (OpenStreetMap) com pontos aproximados e trajetos narrativos tracejados. Não reconstruímos estradas antigas; a identificação exata de várias aldeias e caminhos permanece incerta. É necessária conexão com a internet.</div><div class="section-title-line"><h2>Percursos para explorar</h2></div><div class="mini-list">${research.rotas.map(r=>`<a class="study-card" href="#/rota/${r.id}"><span class="study-icon">⌖</span><span class="study-card-content"><small>${esc(r.texto)}</small><span class="study-card-title" style="display:block">${esc(r.titulo)}</span><span class="study-card-summary">${esc(r.subtitulo)} · ${esc(r.qualidade)}</span></span><span class="study-card-arrow">→</span></a>`).join('')}</div></div>`;}

let liveMap=null;
function initRouteMap(r){
 const container=$('#biblical-map');
 if(!container||!r)return;
 if(!window.L){container.innerHTML='<div class="map-loading">Mapa online indisponível nesta conexão. Consulte as localizações pelo OpenStreetMap na lista abaixo.</div>';return;}
 try{
  container.innerHTML='';
  const L=window.L;
  liveMap=L.map(container,{scrollWheelZoom:false,zoomControl:true});
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
   maxZoom:18,minZoom:2,
   attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>',
   referrerPolicy:'strict-origin-when-cross-origin'
  }).addTo(liveMap);
  const coordinates=r.locais.map(p=>[p.lat,p.lon]);
  L.polyline(coordinates,{color:'#7a433f',weight:3,dashArray:'6,9',opacity:.88}).addTo(liveMap);
  r.locais.forEach((p,i)=>{
   const text='<strong>'+(i+1)+'. '+esc(p.nome)+'</strong><p>'+esc(p.nota)+'</p><small>Localização aproximada, não prova de rota histórica.</small>';
   L.circleMarker([p.lat,p.lon],{radius:8,color:'#fffdf7',weight:2,fillColor:'#7a433f',fillOpacity:1}).addTo(liveMap).bindPopup(text);
  });
  liveMap.fitBounds(L.latLngBounds(coordinates).pad(.24),{maxZoom:9});
  requestAnimationFrame(()=>liveMap&&liveMap.invalidateSize());
 }catch(error){container.innerHTML='<div class="map-loading">Não foi possível abrir o mapa interativo. As localizações estão disponíveis na lista abaixo.</div>';liveMap=null;}
}
function renderRoute(r){
 const key='route:'+r.id;
 return \`<div class="container"><div class="backline"><a href="#/mapas" class="text-link">← Todos os percursos</a></div><div class="article-card"><span class="eyebrow">\${esc(r.texto)} · \${esc(r.qualidade)}</span><h1>\${esc(r.titulo)}</h1><p class="article-lead">\${esc(r.subtitulo)}</p><div class="map-frame"><div id="biblical-map" class="biblical-map" role="region" aria-label="Mapa geográfico interativo com pontos aproximados da narrativa bíblica"><div class="map-loading">Carregando mapa geográfico...</div></div></div><p class="map-caption">Base cartográfica atual: © OpenStreetMap contributors (ODbL). Pontos geográficos aproximados; linhas tracejadas apenas unem a sequência narrativa, não são estradas nem rotas antigas comprovadas. O mapa exige internet.</p><div class="warning"><strong>Como interpretar:</strong> \${esc(r.comentario)}</div><div class="section-title-line"><h2>Etapas identificadas</h2></div><div class="route-stops">\${r.locais.map((p,i)=>\`<div class="route-stop"><span class="stop-number">\${i+1}</span><div><strong>\${esc(p.nome)}</strong><p>\${esc(p.nota)}</p>\${link(\`https://www.openstreetmap.org/?mlat=\${p.lat}&mlon=\${p.lon}#map=10/\${p.lat}/\${p.lon}\`,'Ver localização no OpenStreetMap')}</div></div>\`).join('')}</div><div class="article-actions"><button class="btn secondary" type="button" data-copy-route="\${r.id}">✣ Pesquisar itinerário com IA</button></div><div class="aside-card" style="margin-top:25px"><h3>Referências</h3>\${r.fontes.map(s=>link(s.url,s.label)).join('')}</div>\${noteEditor(key)}</div></div>\`;
}
function renderNotebook(){let entries=Object.entries(store.notes).filter(([,v])=>String(v||'').trim());return `<div class="container">${sectionHead('caderno','ÁREA PESSOAL · ARMAZENADA NESTE DISPOSITIVO')}<div class="summary-bar"><div class="summary-stat"><strong>${entries.length}</strong><span>anotações salvas</span></div><div class="summary-stat"><strong>${store.favorites.length}</strong><span>estudos favoritos</span></div><div class="summary-stat"><strong>Local</strong><span>Sem login ou servidor pago</span></div></div><div class="notebook-actions"><button class="btn" type="button" data-export="1">↓ Exportar meu caderno</button><button class="btn secondary" type="button" data-import="1">↑ Importar backup</button></div><div class="warning">As informações são salvas no navegador deste aparelho. Não há sincronização entre dispositivos; limpar os dados do Safari pode apagar tudo. Exporte um backup periodicamente.</div><div class="section-title-line"><h2>Minhas anotações</h2></div>${entries.length?`<div class="notebook-list">${entries.map(([key,value])=>`<div class="notebook-item"><strong>${esc(describeKey(key))}</strong><p>${esc(String(value).slice(0,1500))}</p><a class="text-link" href="${linkForKey(key)}">Abrir estudo →</a></div>`).join('')}</div>`:`<div class="empty"><h3>Seu caderno está em branco</h3><p>Abra um estudo ou verbete e registre suas próprias descobertas.</p></div>`}<div class="section-title-line"><h2>Favoritos</h2></div>${store.favorites.length?`<div class="mini-list">${store.favorites.map(k=>`<a class="study-card" href="${linkForKey(k)}"><span class="study-icon">☆</span><span class="study-card-content"><span class="study-card-title">${esc(describeKey(k))}</span></span><span class="study-card-arrow">→</span></a>`).join('')}</div>`:`<div class="empty"><p>Você ainda não marcou estudos como favoritos.</p></div>`}</div>`;}
function describeKey(key){const [type, ...rest]=key.split(':');let target=rest.join(':');if(type==='article')return data.articles.find(x=>x.id===target)?.title||target;if(type==='word')return research.palavras.find(x=>x.id===target)?.titulo||target;if(type==='route')return research.rotas.find(x=>x.id===target)?.titulo||target;if(type==='book')return target;return key;}
function linkForKey(key){let [kind,...rest]=key.split(':');const target=rest.join(':');return {article:'#/estudo/',word:'#/palavra/',route:'#/rota/',book:'#/livro/'}[kind]?.concat(id(target))||'#/caderno';}
function renderSources(){const src=[
 ['Doutrina, liturgia e direito','Catecismo da Igreja Católica','Referência doutrinal essencial; a edição online pertence à Santa Sé.','https://www.vatican.va/archive/cathechism_po/index_new/indice_po.html'],
 ['Doutrina, liturgia e direito','Dei Verbum, Concílio Vaticano II','Interpretação da Escritura em sua relação com a Tradição e o Magistério.','https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_po.html'],
 ['Doutrina, liturgia e direito','Instrução Geral do Missal Romano','Texto em inglês com adaptações dos EUA; não substitui a edição normativa da CNBB para o Brasil.','https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_en.html'],
 ['Doutrina, liturgia e direito','Código de Direito Canônico','Requer consulta a normas posteriores que alteram o Código (ex.: leitorado e acolitado em 2021).','https://press.vatican.va/archive/cod-iuris-canonici/portuguese/codex-iuris-canonici_po.pdf'],
 ['Doutrina, liturgia e direito','IGMR brasileira (Edições CNBB)','Normas da Missa no Brasil, atualizadas para a 3ª edição do Missal Romano.','https://www.cnbb.org.br/edicoes-cnbb-lanca-instrucao-geral-do-missal-romano-e-introducao-ao-lecionario-e-estudo-da-cnbb-no-115-sobre-as-vestes-liturgicas/'],
  ['Doutrina, liturgia e direito','Spiritus Domini (2021)','Alteração do cân. 230 §1: mulheres e homens podem receber ministérios instituídos de leitor e acólito.','https://www.vatican.va/content/francesco/pt/motu_proprio/documents/papa-francesco-motu-proprio-20210110_spiritus-domini.html'],
  ['Doutrina, liturgia e direito','Redemptionis Sacramentum','Limites dos ministérios, natureza sacrificial da Missa e disciplina eucarística.','https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20040423_redemptionis-sacramentum_po.html'],
  ['Texto e pesquisa bíblica','USCCB — Bíblia online','Bíblia em inglês para consulta externa e referências cruzadas.','https://bible.usccb.org/bible'],
 ['Texto e pesquisa bíblica','SBL Greek New Testament','Edição acadêmica crítica do Novo Testamento grego. Licença CC BY 4.0.','https://sblgnt.com/license/'],
 ['Texto e pesquisa bíblica','Open Scriptures Hebrew Bible','Texto hebraico baseado no códice de Leningrado, dados lexicais e morfologia. Licença CC BY 4.0.','https://github.com/openscriptures/morphhb/blob/master/LICENSE.md'],
 ['Geografia','OpenStreetMap','Links externos com localização moderna aproximada; não é prova de trajetos históricos.','https://www.openstreetmap.org/']
];const groups=[...new Set(src.map(x=>x[0]))];return `<div class="container">${sectionHead('fontes','METODOLOGIA E TRANSPARÊNCIA')}<div class="article-card"><h2>Nem toda informação tem o mesmo peso</h2><p class="article-lead">O projeto distingue o ensinamento da Igreja, os relatos bíblicos, os resultados da pesquisa acadêmica e as hipóteses de reconstrução.</p><div class="source-levels"><div><span class="tag">Fonte eclesial</span><p>Doutrina e liturgia com referência ao documento e parágrafo.</p></div><div><span class="tag muted">Dado acadêmico</span><p>Edição, autor, licença, manuscrito ou evidência histórica identificável.</p></div><div><span class="tag muted">Interpretação</span><p>Explicação autoral que pode ser revista, sempre com fontes consultáveis.</p></div><div><span class="tag muted">Hipótese</span><p>Afirmação ou rota incerta, explicitamente marcada como tal.</p></div></div><div class="warning"><strong>IA com responsabilidade:</strong> um modelo pode ajudar a organizar ideias, mas também inventar citações e exagerar certezas. Antes de compartilhar, exigiremos revisão das fontes, da tradução, da atribuição e do contexto. O conteúdo atual é um protótipo editorial e não tem aprovação eclesiástica formal.</div><div class="article-body">${groups.map(g=>`<section><h3>${esc(g)}</h3><div class="mini-list">${src.filter(s=>s[0]===g).map(s=>`<div class="reference-row"><strong>${esc(s[1])}</strong><p>${esc(s[2])}</p>${link(s[3],'Abrir fonte')}</div>`).join('')}</div></section>`).join('')}</div><div class="article-tip"><strong>Sobre direitos autorais</strong>Um documento estar disponível na internet não significa que pode ser copiado integralmente para outro aplicativo. Os textos originais em grego e hebraico listados possuem licenças específicas; traduções modernas, Missal e Catecismo devem ser tratados conforme os direitos de cada publicação.</div><p class="article-lead" style="margin-top:18px">Independente, gratuito, sem publicidade nesta versão. Sem autenticação ou coleta de dados por nosso projeto; links externos têm suas próprias políticas.</p></div></div>`;}
function renderMissing(){return `<div class="container"><div class="empty"><h3>Conteúdo não encontrado</h3><p>Este estudo pode ter sido movido ou ainda não estar disponível.</p><a class="btn" href="#/inicio">Ir para o início</a></div></div>`;}
function render(){const p=path();let html;const name=p[0]||'inicio';if(name==='inicio')html=renderHome();else if(name==='biblioteca')html=renderAll();else if(name==='biblia')html=renderBible();else if(['missa','igreja','sacramentos','oracoes'].includes(name))html=renderSection(name);else if(name==='estudo'){const a=data.articles.find(x=>x.id===p[1]);html=a?renderArticle(a):renderMissing();}else if(name==='livro')html=renderBook(p[1]);else if(name==='idiomas')html=renderWords();else if(name==='palavra')html=research.palavras.find(x=>x.id===p[1])?renderWord(research.palavras.find(x=>x.id===p[1])):renderMissing();else if(name==='mapas')html=renderMaps();else if(name==='rota')html=research.rotas.find(x=>x.id===p[1])?renderRoute(research.rotas.find(x=>x.id===p[1])):renderMissing();else html=renderMissing();if(liveMap){liveMap.remove();liveMap=null;}$('#app').innerHTML=html;renderNav();if(name==='rota')initRouteMap(research.rotas.find(x=>x.id===p[1]));let s=sections.find(x=>x.id===activeSection());$('#breadcrumbs').innerHTML=`Início <span>/</span> <strong>${esc(s?.label||'Estudos')}</strong>`;document.title=`${s?.label||'Estudos'} | Fé, Escritura & Tradição`;window.scrollTo({top:0,behavior:'instant'});}
function searchOpen(){let d=$('#search-dialog');d.classList.remove('hidden');$('#search-input').value='';searchUpdate();setTimeout(()=>$('#search-input').focus(),50);}
function searchClose(){let d=$('#search-dialog');d.classList.add('hidden');$('#search-trigger').focus();}
function searchUpdate(){let q=$('#search-input').value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();let xs=[...data.articles.map(a=>({title:a.title,summary:a.summary,url:'#/estudo/'+id(a.id),section:a.category})),...research.palavras.map(w=>({title:w.titulo+' ('+w.transliteracao+')',summary:w.analise,url:'#/palavra/'+w.id,section:'Idiomas'})),...research.rotas.map(r=>({title:r.titulo,summary:r.subtitulo,url:'#/rota/'+r.id,section:'Mapas'}))];if(q)xs=xs.filter(x=>(x.title+' '+x.summary+' '+x.section).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(q));xs=xs.slice(0,22);$('#search-results').innerHTML=xs.length?xs.map(x=>`<a class="study-card" href="${x.url}" data-search-result="1"><span class="study-card-content"><small>${esc(x.section)}</small><span class="study-card-title" style="display:block">${esc(x.title)}</span><span class="study-card-summary">${esc(x.summary)}</span></span><span class="study-card-arrow">→</span></a>`).join(''):'<div class="empty"><p>Nenhum estudo encontrado para esta pesquisa.</p></div>';}
function exportData(){const output={app:'fe-escritura-tradicao',version:1,date:new Date().toISOString(),notes:store.notes,favorites:store.favorites};const blob=new Blob([JSON.stringify(output,null,2)],{type:'application/json;charset=utf-8'});let href=URL.createObjectURL(blob);let a=document.createElement('a');a.href=href;a.download='meu-caderno-fe-e-tradicao.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(href),3000);toast('Backup exportado. Guarde o arquivo em local seguro.');}
function promptForArticle(a){return `Analise o tema "${a.title}" (${a.scripture||'sem referência bíblica central'}) em perspectiva católica. Separe: (1) texto e contexto, (2) referências exatas do Catecismo/Magistério, (3) diferentes interpretações históricas, (4) pontos discutidos ou incertos, (5) aplicação espiritual. Consulte fontes originais e apresente links precisos. Não invente citações, não transforme hipóteses em doutrina e sinalize o que não foi verificado.`;}
function promptForWord(w){return `Faça uma análise verificável da palavra ${w.termo} (${w.transliteracao}), em ${w.referencia}. Inclua grafia, lema, flexão gramatical quando documentável, alcance semântico contextual, ocorrências paralelas, traduções e comentários patrísticos com fontes precisas. Distinga variantes de manuscritos das diferentes interpretações ao longo da história. Use edição crítica identificada e respeite a interpretação católica. Não invente léxicos, etimologias ou citações.`;}
function promptForRoute(r){return `Investigue o itinerário ${r.titulo}, especialmente ${r.texto}. Diferencie nomes de lugares explicitamente citados, identificação arqueológica moderna, cronologia discutida e caminhos hipotéticos. Se apresentar coordenadas, atribua fonte e margem de incerteza. Não apresente linhas retas do mapa como estradas históricas. Inclua referências bíblicas e bibliografia.`;}
async function copyText(s){try{await navigator.clipboard.writeText(s);toast('Roteiro copiado para usar no assistente de IA de sua escolha.');}catch{let t=document.createElement('textarea');t.value=s;t.style.position='fixed';t.style.left='-9999px';document.body.appendChild(t);t.select();let ok=document.execCommand('copy');t.remove();toast(ok?'Roteiro copiado.':'Não foi possível copiar neste navegador.');}}
function toggleFavorite(key){let i=store.favorites.indexOf(key);if(i===-1)store.favorites.push(key);else store.favorites.splice(i,1);saveStore();render();toast(i===-1?'Adicionado aos favoritos.':'Removido dos favoritos.');}
window.addEventListener('hashchange',()=>{state.filter='Todos';render();if(!$('#search-dialog').classList.contains('hidden'))searchClose();});
document.addEventListener('click',e=>{let filter=e.target.closest('[data-filter]');if(filter){state.filter=filter.dataset.filter;render();return;}let fav=e.target.closest('[data-favorite]');if(fav){toggleFavorite(fav.dataset.favorite);return;}let article=e.target.closest('[data-copy-prompt]');if(article){let a=data.articles.find(x=>x.id===article.dataset.copyPrompt);if(a)copyText(promptForArticle(a));return;}let word=e.target.closest('[data-copy-word]');if(word){let w=research.palavras.find(x=>x.id===word.dataset.copyWord);if(w)copyText(promptForWord(w));return;}let route=e.target.closest('[data-copy-route]');if(route){let r=research.rotas.find(x=>x.id===route.dataset.copyRoute);if(r)copyText(promptForRoute(r));return;}if(e.target.closest('[data-export]')){exportData();return;}if(e.target.closest('[data-import]')){$('#import-file').click();return;}if(e.target===$('#search-dialog'))searchClose();if(e.target.closest('[data-search-result]'))searchClose();});
document.addEventListener('input',e=>{if(e.target.matches('[data-note]')){store.notes[e.target.dataset.note]=e.target.value.slice(0,25000);saveStore();let status=$('#note-status');if(status)status.textContent='Anotação salva localmente.';}if(e.target===$('#search-input'))searchUpdate();});
$('#search-trigger').addEventListener('click',searchOpen);$('#search-close').addEventListener('click',searchClose);
$('#theme-toggle').addEventListener('click',()=>{store.theme=store.theme==='dark'?'light':'dark';saveStore();theme();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#search-dialog').classList.contains('hidden'))searchClose();if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)&&$('#search-dialog').classList.contains('hidden')){e.preventDefault();searchOpen();}});
$('#import-file').addEventListener('change',async e=>{const file=e.target.files?.[0];e.target.value='';if(!file)return;if(file.size>2000000){toast('O backup ultrapassa o limite de 2 MB.');return;}try{const imported=JSON.parse(await file.text());if(imported.app!=='fe-escritura-tradicao'||imported.version!==1||!imported.notes||!Array.isArray(imported.favorites))throw Error('Formato inválido');const notes=Object.fromEntries(Object.entries(imported.notes).filter(([k,v])=>typeof k==='string'&&typeof v==='string'&&k.length<200&&v.length<=25000));const favorites=imported.favorites.filter(x=>typeof x==='string'&&x.length<200).slice(0,500);if(!confirm('Importar backup substituirá as anotações e favoritos atuais. Deseja continuar?'))return;store.notes=notes;store.favorites=favorites;saveStore();render();toast('Backup importado com sucesso.');}catch{toast('Arquivo inválido. Use um backup exportado por este aplicativo.');}});
if(!location.hash)location.hash='#/inicio';theme();render();
if('serviceWorker' in navigator && location.protocol!=='file:')window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
})();
