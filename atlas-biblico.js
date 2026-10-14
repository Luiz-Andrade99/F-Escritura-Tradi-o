/* Atlas bíblico expandido: geografia ilustrativa, referências bíblicas e graus de incerteza. */
(() => {
 'use strict';
 const pool=window.FET_PESQUISA?.rotas;
 if(!Array.isArray(pool))throw Error('Percursos bíblicos originais indisponíveis.');
 const additions=[
 {
  "id": "eden-rios",
  "titulo": "Rios mencionados no Éden",
  "subtitulo": "Rio Tigre · Rio Eufrates",
  "texto": "Gn 2,10–14",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Os rios atuais servem apenas de referências geográficas. A localização do jardim do Éden não é conhecida.",
  "testamento": "AT",
  "grupo": "Origens",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Rio Tigre (trecho)",
    "lat": 34.33,
    "lon": 43.79,
    "nota": "Trecho moderno do rio; não localiza o jardim do Éden."
   },
   {
    "nome": "Rio Eufrates (trecho)",
    "lat": 35.62,
    "lon": 39.83,
    "nota": "Trecho moderno do rio; não localiza o jardim do Éden."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/genesis/2"
   }
  ]
 },
 {
  "id": "babel",
  "titulo": "Babel na Mesopotâmia",
  "subtitulo": "Babilônia",
  "texto": "Gn 11,1–9",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "A antiga Babilônia é referência para o nome Babel. O texto não oferece coordenadas da torre.",
  "testamento": "AT",
  "grupo": "Origens",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Babilônia",
    "lat": 32.536,
    "lon": 44.421,
    "nota": "Sítio arqueológico da antiga Babilônia."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/genesis/11"
   }
  ]
 },
 {
  "id": "diluvio-ararat",
  "titulo": "As montanhas de Ararat",
  "subtitulo": "Montanhas de Ararat",
  "texto": "Gn 8,1–5",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O relato menciona as montanhas de Ararat, não um pico cuja localização possa ser confirmada.",
  "testamento": "AT",
  "grupo": "Origens",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Montanhas de Ararat (região ampla)",
    "lat": 39.69,
    "lon": 44.31,
    "nota": "Referência montanhosa tradicional; Gn 8,4 não identifica um pico específico."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/genesis/8"
   }
  ]
 },
 {
  "id": "abraao-ur-hara",
  "titulo": "Abraão: Ur, Harã e Canaã",
  "subtitulo": "Ur · Harã · Siquém",
  "texto": "Gn 11,27–12,7",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "Gn 11–12 menciona as regiões nesta sequência; a escolha dos sítios modernos é tradicional ou debatida.",
  "testamento": "AT",
  "grupo": "Patriarcas",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Ur (Tell el-Muqayyar)",
    "lat": 30.962,
    "lon": 46.103,
    "nota": "Identificação tradicional de Ur dos caldeus; o lugar exato mencionado em Gn 11 é discutido."
   },
   {
    "nome": "Harã",
    "lat": 36.867,
    "lon": 39.031,
    "nota": "Cidade da Alta Mesopotâmia, tradicionalmente identificada com Harran."
   },
   {
    "nome": "Siquém",
    "lat": 32.214,
    "lon": 35.278,
    "nota": "Área de Tell Balata, identificação arqueológica frequente."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/genesis/12"
   }
  ]
 },
 {
  "id": "abraao-altar",
  "titulo": "Abraão: locais de culto em Canaã",
  "subtitulo": "Siquém · Betel · Hebron · Bersabeia",
  "texto": "Gn 12,6–9; 13,18; 21,33",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Conjunto de lugares ligados a episódios diferentes da vida de Abraão; não representa um só percurso contínuo.",
  "testamento": "AT",
  "grupo": "Patriarcas",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Siquém",
    "lat": 32.214,
    "lon": 35.278,
    "nota": "Área de Tell Balata, identificação arqueológica frequente."
   },
   {
    "nome": "Betel (identificação proposta)",
    "lat": 31.939,
    "lon": 35.226,
    "nota": "Área de Beitin, identificação amplamente proposta; acampamento antigo não localizado."
   },
   {
    "nome": "Hebron",
    "lat": 31.532,
    "lon": 35.097,
    "nota": "Cidade da região montanhosa de Judá, tradicionalmente associada aos patriarcas."
   },
   {
    "nome": "Bersabeia",
    "lat": 31.251,
    "lon": 34.791,
    "nota": "Região de Bersabeia; poços e acampamentos patriarcais não têm posição comprovada."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/genesis/13"
   }
  ]
 },
 {
  "id": "jacob-partida",
  "titulo": "Jacó: de Bersabeia a Harã",
  "subtitulo": "Bersabeia · Betel · Harã",
  "texto": "Gn 28,10–22",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "A sequência regional é narrada; o caminho exato não está documentado.",
  "testamento": "AT",
  "grupo": "Patriarcas",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Bersabeia",
    "lat": 31.251,
    "lon": 34.791,
    "nota": "Região de Bersabeia; poços e acampamentos patriarcais não têm posição comprovada."
   },
   {
    "nome": "Betel (identificação proposta)",
    "lat": 31.939,
    "lon": 35.226,
    "nota": "Área de Beitin, identificação amplamente proposta; acampamento antigo não localizado."
   },
   {
    "nome": "Harã",
    "lat": 36.867,
    "lon": 39.031,
    "nota": "Cidade da Alta Mesopotâmia, tradicionalmente identificada com Harran."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/genesis/28"
   }
  ]
 },
 {
  "id": "jose-dota-egito",
  "titulo": "José: de Dotã ao Egito",
  "subtitulo": "Dotã · Delta oriental do Nilo",
  "texto": "Gn 37,12–36",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "O traslado de José ao Egito é narrado; a posição exata da residência egípcia e os caminhos da caravana são desconhecidos.",
  "testamento": "AT",
  "grupo": "Patriarcas",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Dotã",
    "lat": 32.412,
    "lon": 35.238,
    "nota": "Identificação usual com Tell Dothan."
   },
   {
    "nome": "Delta oriental do Nilo (região)",
    "lat": 30.74,
    "lon": 31.93,
    "nota": "Região ilustrativa do Egito; não representa um endereço residencial ou acampamento confirmado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/genesis/37"
   }
  ]
 },
 {
  "id": "exodo-regioes",
  "titulo": "Êxodo: regiões e incertezas",
  "subtitulo": "Ramsés · Delta oriental do Nilo · Monte Sinai · Planícies de Moab",
  "texto": "Ex 12–19; Nm 33",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O ponto da travessia do mar e o monte Sinai não foram identificados com certeza; estes marcadores NÃO formam uma rota histórica comprovada.",
  "testamento": "AT",
  "grupo": "Êxodo e conquista",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Ramsés (região proposta)",
    "lat": 30.8,
    "lon": 31.84,
    "nota": "Área frequentemente associada à cidade de Pi-Ramsés, sem reconstrução do caminho do Êxodo."
   },
   {
    "nome": "Delta oriental do Nilo (região)",
    "lat": 30.74,
    "lon": 31.93,
    "nota": "Região ilustrativa do Egito; não representa um endereço residencial ou acampamento confirmado."
   },
   {
    "nome": "Monte Sinai (identificação tradicional)",
    "lat": 28.537,
    "lon": 33.975,
    "nota": "Jebel Musa é identificação tradicional; o monte bíblico não foi identificado com certeza."
   },
   {
    "nome": "Planícies de Moab (região)",
    "lat": 31.8,
    "lon": 35.62,
    "nota": "Área a leste do Jordão, diante de Jericó; localização regional aproximada."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/exodus/13"
   }
  ]
 },
 {
  "id": "sinai-lei",
  "titulo": "O Sinai e a entrega da Lei",
  "subtitulo": "Monte Sinai",
  "texto": "Ex 19–20",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "A posição marcada é a identificação religiosa tradicional de Jebel Musa; outras hipóteses existem.",
  "testamento": "AT",
  "grupo": "Êxodo e conquista",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Monte Sinai (identificação tradicional)",
    "lat": 28.537,
    "lon": 33.975,
    "nota": "Jebel Musa é identificação tradicional; o monte bíblico não foi identificado com certeza."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/exodus/19"
   }
  ]
 },
 {
  "id": "jordan-jerico",
  "titulo": "Travessia do Jordão e Jericó",
  "subtitulo": "Planícies de Moab · Rio Jordão · Guilgal · Jericó",
  "texto": "Js 3–6",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O ponto exato de travessia não é conhecido; Guilgal é de identificação discutida.",
  "testamento": "AT",
  "grupo": "Êxodo e conquista",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Planícies de Moab (região)",
    "lat": 31.8,
    "lon": 35.62,
    "nota": "Área a leste do Jordão, diante de Jericó; localização regional aproximada."
   },
   {
    "nome": "Rio Jordão (trecho)",
    "lat": 31.846,
    "lon": 35.551,
    "nota": "Referência hidrográfica aproximada; travessia do relato não localizada exatamente."
   },
   {
    "nome": "Guilgal (região tradicional)",
    "lat": 31.872,
    "lon": 35.45,
    "nota": "Identificação exata de Guilgal debatida; marcador ilustrativo próximo a Jericó."
   },
   {
    "nome": "Jericó",
    "lat": 31.869,
    "lon": 35.444,
    "nota": "Área da antiga Tell es-Sultan; a cronologia arqueológica é debatida."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/joshua/3"
   }
  ]
 },
 {
  "id": "ebal-gerizim",
  "titulo": "Garizim, Ebal e Siquém",
  "subtitulo": "Monte Garizim · Monte Ebal · Siquém",
  "texto": "Dt 27; Js 8,30–35",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Os montes são geograficamente identificáveis, mas os locais precisos das cerimônias antigas não são comprovados.",
  "testamento": "AT",
  "grupo": "Êxodo e conquista",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Monte Garizim",
    "lat": 32.198,
    "lon": 35.272,
    "nota": "Elevação tradicionalmente identificada com o monte do relato."
   },
   {
    "nome": "Monte Ebal",
    "lat": 32.244,
    "lon": 35.271,
    "nota": "Monte que domina a bacia de Siquém."
   },
   {
    "nome": "Siquém",
    "lat": 32.214,
    "lon": 35.278,
    "nota": "Área de Tell Balata, identificação arqueológica frequente."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/joshua/8"
   }
  ]
 },
 {
  "id": "debora-baraque",
  "titulo": "Débora, Barac e o vale do Quison",
  "subtitulo": "Hazor · Monte Tabor · Rio Quison",
  "texto": "Jz 4–5",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Referências geográficas dos episódios, não um desenho das posições militares.",
  "testamento": "AT",
  "grupo": "Juízes",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Hazor",
    "lat": 33.017,
    "lon": 35.566,
    "nota": "Identificação arqueológica comum em Tell Hazor."
   },
   {
    "nome": "Monte Tabor",
    "lat": 32.688,
    "lon": 35.39,
    "nota": "Monte identificado na geografia regional; relação com a Transfiguração é tradição, não afirmação textual."
   },
   {
    "nome": "Rio Quison (trecho)",
    "lat": 32.753,
    "lon": 35.043,
    "nota": "Referência a um trecho do vale fluvial."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/judges/4"
   }
  ]
 },
 {
  "id": "gideao",
  "titulo": "Gedeão e a fonte de Harod",
  "subtitulo": "Fonte de Harod · Jezrael",
  "texto": "Jz 6–7",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Indicação aproximada da planície e da fonte; o local de cada episódio não está definido.",
  "testamento": "AT",
  "grupo": "Juízes",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Fonte de Harod (região)",
    "lat": 32.551,
    "lon": 35.354,
    "nota": "Referência próxima ao local tradicional da fonte."
   },
   {
    "nome": "Jezrael",
    "lat": 32.556,
    "lon": 35.33,
    "nota": "Ruínas associadas à cidade da planície de Jezrael."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/judges/7"
   }
  ]
 },
 {
  "id": "sansao",
  "titulo": "Sansão e as cidades filisteias",
  "subtitulo": "Soreá · Timna · Gaza",
  "texto": "Jz 13–16",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O mapa mostra cidades relacionadas a episódios diferentes, sem sugerir uma única viagem contínua.",
  "testamento": "AT",
  "grupo": "Juízes",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Soreá",
    "lat": 31.765,
    "lon": 34.988,
    "nota": "Identificação proposta para a cidade associada a Sansão."
   },
   {
    "nome": "Timna (região de Judá)",
    "lat": 31.769,
    "lon": 34.952,
    "nota": "Identificação geográfica proposta, não obrigatoriamente uma casa ou local exato do episódio."
   },
   {
    "nome": "Gaza (região urbana)",
    "lat": 31.5,
    "lon": 34.466,
    "nota": "Referência geográfica de Gaza, não ponto arqueológico de um evento antigo."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/judges/16"
   }
  ]
 },
 {
  "id": "rute",
  "titulo": "Rute: Moab e Belém",
  "subtitulo": "Moab · Belém da Judeia",
  "texto": "Rt 1–4",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "Rute acompanha Noemi de Moab a Belém; a aldeia de origem e o caminho específico são desconhecidos.",
  "testamento": "AT",
  "grupo": "Juízes",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Moab (região)",
    "lat": 31.46,
    "lon": 35.76,
    "nota": "Marcador geográfico regional, não cidade de origem identificada para Rute."
   },
   {
    "nome": "Belém da Judeia",
    "lat": 31.704,
    "lon": 35.206,
    "nota": "Cidade ao sul de Jerusalém."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/ruth/1"
   }
  ]
 },
 {
  "id": "silo-tabernaculo",
  "titulo": "Silo e o santuário de Israel",
  "subtitulo": "Silo",
  "texto": "1Sm 1–4",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Silo é lugar central do relato de Samuel; não se deve inferir a posição de cada objeto ritual.",
  "testamento": "AT",
  "grupo": "Monarquia",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Silo (Khirbet Seilun)",
    "lat": 32.055,
    "lon": 35.291,
    "nota": "Sítio arqueológico tradicionalmente identificado com Silo."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/1samuel/1"
   }
  ]
 },
 {
  "id": "davi-golias",
  "titulo": "Davi, Golias e o vale de Elá",
  "subtitulo": "Belém da Judeia · Socó · Azeca · Vale de Elá · Gate",
  "texto": "1Sm 17",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O texto localiza os exércitos entre Socó e Azeca; não fixa a posição exata do combate.",
  "testamento": "AT",
  "grupo": "Monarquia",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Belém da Judeia",
    "lat": 31.704,
    "lon": 35.206,
    "nota": "Cidade ao sul de Jerusalém."
   },
   {
    "nome": "Socó (área proposta)",
    "lat": 31.682,
    "lon": 34.973,
    "nota": "Identificação arqueológica proposta na Sefelá."
   },
   {
    "nome": "Azeca",
    "lat": 31.7,
    "lon": 34.938,
    "nota": "Sítio arqueológico de Tel Azekah."
   },
   {
    "nome": "Vale de Elá",
    "lat": 31.697,
    "lon": 34.969,
    "nota": "Região do vale; local exato do confronto não comprovado."
   },
   {
    "nome": "Gate (Tell es-Safi)",
    "lat": 31.7,
    "lon": 34.847,
    "nota": "Identificação arqueológica proposta para a cidade filisteia de Gate."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/1samuel/17"
   }
  ]
 },
 {
  "id": "saul-gelboe",
  "titulo": "Saul no monte Gelboé",
  "subtitulo": "Monte Gelboé · Betsã",
  "texto": "1Sm 31",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O monte e a cidade aparecem no mesmo relato; a área do combate é regional.",
  "testamento": "AT",
  "grupo": "Monarquia",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Monte Gelboé (região)",
    "lat": 32.488,
    "lon": 35.421,
    "nota": "Região montanhosa do relato de 1Sm 31."
   },
   {
    "nome": "Betsã",
    "lat": 32.504,
    "lon": 35.502,
    "nota": "Sítio arqueológico da antiga Bete-Seã."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/1samuel/31"
   }
  ]
 },
 {
  "id": "davi-capitais",
  "titulo": "Davi: Hebron e Jerusalém",
  "subtitulo": "Hebron · Jerusalém",
  "texto": "2Sm 2; 5",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "Hebron e depois Jerusalém são sedes do governo de Davi, não etapas de uma viagem individual descrita ponto a ponto.",
  "testamento": "AT",
  "grupo": "Monarquia",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Hebron",
    "lat": 31.532,
    "lon": 35.097,
    "nota": "Cidade da região montanhosa de Judá, tradicionalmente associada aos patriarcas."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/2samuel/5"
   }
  ]
 },
 {
  "id": "salomao-templo",
  "titulo": "Salomão: Gabaon e Jerusalém",
  "subtitulo": "Gabaon · Jerusalém",
  "texto": "1Rs 3; 6–8",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Gabaon e Jerusalém são contextos distintos dos relatos sobre Salomão.",
  "testamento": "AT",
  "grupo": "Monarquia",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Gabaon (el-Jib)",
    "lat": 31.846,
    "lon": 35.18,
    "nota": "Identificação comum da antiga Gabaon."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/1kings/3"
   }
  ]
 },
 {
  "id": "reinos-divididos",
  "titulo": "Reinos de Israel e Judá",
  "subtitulo": "Siquém · Samaria · Betel · Jerusalém",
  "texto": "1Rs 12–16",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Lugares políticos e cultuais de períodos distintos; o mapa não desenha fronteiras estáticas.",
  "testamento": "AT",
  "grupo": "Reinos e profetas",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Siquém",
    "lat": 32.214,
    "lon": 35.278,
    "nota": "Área de Tell Balata, identificação arqueológica frequente."
   },
   {
    "nome": "Samaria (Sebaste)",
    "lat": 32.277,
    "lon": 35.198,
    "nota": "Colina do sítio arqueológico da antiga capital do reino de Israel."
   },
   {
    "nome": "Betel",
    "lat": 31.939,
    "lon": 35.226,
    "nota": "Identificação proposta da cidade e do santuário do reino do Norte."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/1kings/12"
   }
  ]
 },
 {
  "id": "elias-carmelo",
  "titulo": "Elias, o Carmelo e o Quison",
  "subtitulo": "Monte Carmelo · Rio Quison · Jezrael",
  "texto": "1Rs 18",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O maciço do Carmelo é conhecido; o local exato do altar não é identificado.",
  "testamento": "AT",
  "grupo": "Reinos e profetas",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Monte Carmelo (região)",
    "lat": 32.731,
    "lon": 34.972,
    "nota": "Referência do maciço; altar descrito em 1Rs 18 não tem posição confirmada."
   },
   {
    "nome": "Rio Quison (trecho)",
    "lat": 32.753,
    "lon": 35.043,
    "nota": "Referência a um trecho do vale fluvial."
   },
   {
    "nome": "Jezrael",
    "lat": 32.556,
    "lon": 35.33,
    "nota": "Ruínas associadas à cidade da planície de Jezrael."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/1kings/18"
   }
  ]
 },
 {
  "id": "eliseu-jordao",
  "titulo": "Elias e Eliseu: Betel, Jericó e Jordão",
  "subtitulo": "Betel · Jericó · Rio Jordão",
  "texto": "2Rs 2,1–18",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "A sequência está no texto; a posição de travessia não foi determinada.",
  "testamento": "AT",
  "grupo": "Reinos e profetas",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Betel (identificação proposta)",
    "lat": 31.939,
    "lon": 35.226,
    "nota": "Área de Beitin, identificação amplamente proposta; acampamento antigo não localizado."
   },
   {
    "nome": "Jericó",
    "lat": 31.869,
    "lon": 35.444,
    "nota": "Área da antiga Tell es-Sultan; a cronologia arqueológica é debatida."
   },
   {
    "nome": "Rio Jordão (trecho)",
    "lat": 31.846,
    "lon": 35.551,
    "nota": "Referência hidrográfica aproximada; travessia do relato não localizada exatamente."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/2kings/2"
   }
  ]
 },
 {
  "id": "amos",
  "titulo": "Amós: Técua, Betel e Samaria",
  "subtitulo": "Técua · Betel · Samaria",
  "texto": "Am 1; 7",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Cidades relevantes para origem e atuação profética; não há itinerário completo de Amós.",
  "testamento": "AT",
  "grupo": "Reinos e profetas",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Técua",
    "lat": 31.637,
    "lon": 35.215,
    "nota": "Região de Tekoa, terra do profeta Amós."
   },
   {
    "nome": "Betel",
    "lat": 31.939,
    "lon": 35.226,
    "nota": "Identificação proposta da cidade e do santuário do reino do Norte."
   },
   {
    "nome": "Samaria (Sebaste)",
    "lat": 32.277,
    "lon": 35.198,
    "nota": "Colina do sítio arqueológico da antiga capital do reino de Israel."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/amos/7"
   }
  ]
 },
 {
  "id": "cerco-laquis",
  "titulo": "Judá: Laquis e Jerusalém",
  "subtitulo": "Laquis · Jerusalém",
  "texto": "2Rs 18–19",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Referências ao avanço assírio, não reconstituição do movimento militar.",
  "testamento": "AT",
  "grupo": "Reinos e profetas",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Laquis (Tel Lachish)",
    "lat": 31.565,
    "lon": 34.85,
    "nota": "Sítio arqueológico do reino de Judá."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/2kings/18"
   }
  ]
 },
 {
  "id": "queda-samaria",
  "titulo": "Queda de Samaria: Israel e Assíria",
  "subtitulo": "Samaria · Nínive",
  "texto": "2Rs 17",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Samaria e Nínive representam centros dos reinos; o texto não mapeia aqui cada destino de deportação.",
  "testamento": "AT",
  "grupo": "Exílio e retorno",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Samaria (Sebaste)",
    "lat": 32.277,
    "lon": 35.198,
    "nota": "Colina do sítio arqueológico da antiga capital do reino de Israel."
   },
   {
    "nome": "Nínive",
    "lat": 36.359,
    "lon": 43.153,
    "nota": "Ruínas da cidade assíria, junto a Mosul."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/2kings/17"
   }
  ]
 },
 {
  "id": "exilio-babilonia",
  "titulo": "Exílio de Judá: Jerusalém e Babilônia",
  "subtitulo": "Jerusalém · Babilônia",
  "texto": "2Rs 24–25; Sl 137",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Pontos de origem e de cativeiro, sem rota da deportação definida.",
  "testamento": "AT",
  "grupo": "Exílio e retorno",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   },
   {
    "nome": "Babilônia",
    "lat": 32.536,
    "lon": 44.421,
    "nota": "Sítio arqueológico da antiga Babilônia."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/2kings/25"
   }
  ]
 },
 {
  "id": "ezequiel",
  "titulo": "Ezequiel e o canal Quebar",
  "subtitulo": "Babilônia · Canal Quebar",
  "texto": "Ez 1–3",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "A localização precisa do curso de água antigo é discutida; ponto regional ilustrativo.",
  "testamento": "AT",
  "grupo": "Exílio e retorno",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Babilônia",
    "lat": 32.536,
    "lon": 44.421,
    "nota": "Sítio arqueológico da antiga Babilônia."
   },
   {
    "nome": "Canal Quebar (região proposta)",
    "lat": 32.113,
    "lon": 45.209,
    "nota": "Localização hidrográfica exata incerta, associada por alguns estudos à região de Nippur."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/ezekiel/1"
   }
  ]
 },
 {
  "id": "daniel",
  "titulo": "Daniel: Babilônia e Susa",
  "subtitulo": "Babilônia · Susa",
  "texto": "Dn 1; 8,2",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Dn 8 relata uma visão situada em Susa; não implica que se tenha descrito uma viagem entre cidades.",
  "testamento": "AT",
  "grupo": "Exílio e retorno",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Babilônia",
    "lat": 32.536,
    "lon": 44.421,
    "nota": "Sítio arqueológico da antiga Babilônia."
   },
   {
    "nome": "Susa",
    "lat": 32.191,
    "lon": 48.256,
    "nota": "Sítio arqueológico iraniano da antiga Susa."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/daniel/8"
   }
  ]
 },
 {
  "id": "ester-susa",
  "titulo": "Ester na corte de Susa",
  "subtitulo": "Susa",
  "texto": "Est 1–10",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "A cidade de Susa aparece como cenário narrativo; o palácio específico não é reconstruído.",
  "testamento": "AT",
  "grupo": "Exílio e retorno",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Susa",
    "lat": 32.191,
    "lon": 48.256,
    "nota": "Sítio arqueológico iraniano da antiga Susa."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/esther/1"
   }
  ]
 },
 {
  "id": "retorno-exilio",
  "titulo": "O retorno do exílio",
  "subtitulo": "Babilônia · Jerusalém",
  "texto": "Esd 1–3",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "A origem e o destino são descritos; a rota utilizada pelos diferentes grupos não é conhecida.",
  "testamento": "AT",
  "grupo": "Exílio e retorno",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Babilônia",
    "lat": 32.536,
    "lon": 44.421,
    "nota": "Sítio arqueológico da antiga Babilônia."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/ezra/1"
   }
  ]
 },
 {
  "id": "neemias",
  "titulo": "Neemias: de Susa a Jerusalém",
  "subtitulo": "Susa · Jerusalém",
  "texto": "Ne 1–2",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "A viagem é narrada em conjunto, sem reconstrução das estradas percorridas.",
  "testamento": "AT",
  "grupo": "Exílio e retorno",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Susa",
    "lat": 32.191,
    "lon": 48.256,
    "nota": "Sítio arqueológico iraniano da antiga Susa."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/nehemiah/2"
   }
  ]
 },
 {
  "id": "tobias",
  "titulo": "Tobias: Nínive, Média e Ecbátana",
  "subtitulo": "Nínive · Ecbátana · Rages",
  "texto": "Tb 1; 5–12",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O livro situa acontecimentos em Nínive e na Média; identificações modernas de Rages e Ecbátana são referências regionais.",
  "testamento": "AT",
  "grupo": "Livros deuterocanônicos",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Nínive",
    "lat": 36.359,
    "lon": 43.153,
    "nota": "Ruínas da cidade assíria, junto a Mosul."
   },
   {
    "nome": "Ecbátana (Hamadan)",
    "lat": 34.799,
    "lon": 48.515,
    "nota": "Identificação geral com Hamadan, no Irã."
   },
   {
    "nome": "Rages (Ray)",
    "lat": 35.602,
    "lon": 51.438,
    "nota": "Região próxima da atual Ray; identificação de referência para o livro de Tobias."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/tobit/5"
   }
  ]
 },
 {
  "id": "judite",
  "titulo": "Judite: Betúlia e a região de Dotã",
  "subtitulo": "Dotã · Jezrael",
  "texto": "Jt 4–7",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Betúlia não possui identificação arqueológica consensual e não é marcada; pontos do entorno são apenas contexto.",
  "testamento": "AT",
  "grupo": "Livros deuterocanônicos",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Dotã",
    "lat": 32.412,
    "lon": 35.238,
    "nota": "Identificação usual com Tell Dothan."
   },
   {
    "nome": "Jezrael",
    "lat": 32.556,
    "lon": 35.33,
    "nota": "Ruínas associadas à cidade da planície de Jezrael."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/judith/7"
   }
  ]
 },
 {
  "id": "macabeus",
  "titulo": "Macabeus: Modin, Bet-Sur e Jerusalém",
  "subtitulo": "Modin · Bet-Sur · Jerusalém",
  "texto": "1Mc 2–4",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Lugares de episódios distintos; não é uma única marcha documentada.",
  "testamento": "AT",
  "grupo": "Livros deuterocanônicos",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Modin (região tradicional)",
    "lat": 31.897,
    "lon": 35.005,
    "nota": "Localização exata da antiga Modin é debatida."
   },
   {
    "nome": "Bet-Sur (área proposta)",
    "lat": 31.59,
    "lon": 35.094,
    "nota": "Identificação tradicional próxima de Khirbet et-Tubeiqa."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/1maccabees/2"
   }
  ]
 },
 {
  "id": "jonas",
  "titulo": "Jonas: Jope e Nínive",
  "subtitulo": "Jope · Nínive",
  "texto": "Jn 1–4",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Társis tem identificação debatida e não está localizada; não se desenha a rota do navio ou do peixe.",
  "testamento": "AT",
  "grupo": "Reinos e profetas",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Jope (Jafa)",
    "lat": 32.052,
    "lon": 34.751,
    "nota": "Porto histórico na atual Jafa, área de Tel Aviv."
   },
   {
    "nome": "Nínive",
    "lat": 36.359,
    "lon": 43.153,
    "nota": "Ruínas da cidade assíria, junto a Mosul."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/jonah/1"
   }
  ]
 },
 {
  "id": "anunciacao",
  "titulo": "Anunciação em Nazaré",
  "subtitulo": "Nazaré",
  "texto": "Lc 1,26–38",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O relato nomeia Nazaré, não a posição exata da casa de Maria.",
  "testamento": "NT",
  "grupo": "Infância de Jesus",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Nazaré",
    "lat": 32.702,
    "lon": 35.298,
    "nota": "Cidade na Galileia."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/luke/1"
   }
  ]
 },
 {
  "id": "visitacao",
  "titulo": "Visitação: Nazaré e as montanhas da Judeia",
  "subtitulo": "Nazaré · Montanhas da Judeia",
  "texto": "Lc 1,39–56",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "A cidade de Zacarias e Isabel não é nomeada em Lucas; o marcador mostra somente a região.",
  "testamento": "NT",
  "grupo": "Infância de Jesus",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Nazaré",
    "lat": 32.702,
    "lon": 35.298,
    "nota": "Cidade na Galileia."
   },
   {
    "nome": "Montanhas da Judeia (região)",
    "lat": 31.64,
    "lon": 35.07,
    "nota": "Lc 1 não nomeia a cidade de Isabel e Zacarias; marcador regional."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/luke/1"
   }
  ]
 },
 {
  "id": "nascimento-jesus",
  "titulo": "Do anúncio ao nascimento: Nazaré e Belém",
  "subtitulo": "Nazaré · Belém da Judeia",
  "texto": "Lc 2,1–20",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "Lucas relata a ida de José de Nazaré a Belém, sem descrever a estrada percorrida.",
  "testamento": "NT",
  "grupo": "Infância de Jesus",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Nazaré",
    "lat": 32.702,
    "lon": 35.298,
    "nota": "Cidade na Galileia."
   },
   {
    "nome": "Belém da Judeia",
    "lat": 31.704,
    "lon": 35.206,
    "nota": "Cidade ao sul de Jerusalém."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/luke/2"
   }
  ]
 },
 {
  "id": "templo-infancia",
  "titulo": "Apresentação e encontro no Templo",
  "subtitulo": "Belém da Judeia · Jerusalém · Nazaré",
  "texto": "Lc 2,22–52",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Os lugares aparecem em episódios distintos; o relato do menino Jesus situa-se em Jerusalém.",
  "testamento": "NT",
  "grupo": "Infância de Jesus",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Belém da Judeia",
    "lat": 31.704,
    "lon": 35.206,
    "nota": "Cidade ao sul de Jerusalém."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   },
   {
    "nome": "Nazaré",
    "lat": 32.702,
    "lon": 35.298,
    "nota": "Cidade na Galileia."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/luke/2"
   }
  ]
 },
 {
  "id": "batismo-jesus",
  "titulo": "Batismo de Jesus e região do Jordão",
  "subtitulo": "Galileia · Rio Jordão · Jerusalém",
  "texto": "Mc 1,4–11; Jo 1,28",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "A identificação exata de 'Betânia além do Jordão' é discutida; o ponto do rio é ilustrativo.",
  "testamento": "NT",
  "grupo": "Vida pública de Jesus",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Galileia (região)",
    "lat": 32.828,
    "lon": 35.308,
    "nota": "Marcador geográfico ilustrativo, não um ponto narrativo exato."
   },
   {
    "nome": "Rio Jordão (região setentrional)",
    "lat": 32.9,
    "lon": 35.62,
    "nota": "O local específico do batismo de Jesus não é determinado pelos evangelhos."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/mark/1"
   }
  ]
 },
 {
  "id": "tentacao-deserto",
  "titulo": "As tentações no deserto",
  "subtitulo": "Montanhas da Judeia · Jerusalém",
  "texto": "Mt 4,1–11",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O deserto e o monte muito alto não têm coordenadas definidas no relato; é indicada apenas a região.",
  "testamento": "NT",
  "grupo": "Vida pública de Jesus",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Montanhas da Judeia (região)",
    "lat": 31.64,
    "lon": 35.07,
    "nota": "Lc 1 não nomeia a cidade de Isabel e Zacarias; marcador regional."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/matthew/4"
   }
  ]
 },
 {
  "id": "ministerio-galileia",
  "titulo": "Jesus nas cidades da Galileia",
  "subtitulo": "Nazaré · Caná · Cafarnaum · Mar da Galileia",
  "texto": "Mt 4; Lc 4–5; Jo 2",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Conjunto de cenários evangélicos em momentos distintos, não percurso cronológico completo.",
  "testamento": "NT",
  "grupo": "Vida pública de Jesus",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Nazaré",
    "lat": 32.702,
    "lon": 35.298,
    "nota": "Cidade na Galileia."
   },
   {
    "nome": "Caná (identificação tradicional)",
    "lat": 32.746,
    "lon": 35.337,
    "nota": "Kafr Kanna é identificação tradicional; Khirbet Qana é outra proposta."
   },
   {
    "nome": "Cafarnaum",
    "lat": 32.882,
    "lon": 35.575,
    "nota": "Sítio arqueológico tradicionalmente identificado com Cafarnaum."
   },
   {
    "nome": "Mar da Galileia",
    "lat": 32.81,
    "lon": 35.6,
    "nota": "Referência ao lago, não ao ponto de um milagre."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/matthew/4"
   }
  ]
 },
 {
  "id": "sermao-monte",
  "titulo": "O Sermão da Montanha",
  "subtitulo": "Mar da Galileia · Cafarnaum · Galileia",
  "texto": "Mt 5–7",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Mateus não determina o monte do discurso; referências regionais não comprovam o local.",
  "testamento": "NT",
  "grupo": "Vida pública de Jesus",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Mar da Galileia",
    "lat": 32.81,
    "lon": 35.6,
    "nota": "Referência ao lago, não ao ponto de um milagre."
   },
   {
    "nome": "Cafarnaum",
    "lat": 32.882,
    "lon": 35.575,
    "nota": "Sítio arqueológico tradicionalmente identificado com Cafarnaum."
   },
   {
    "nome": "Galileia (região)",
    "lat": 32.828,
    "lon": 35.308,
    "nota": "Marcador geográfico ilustrativo, não um ponto narrativo exato."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/matthew/5"
   }
  ]
 },
 {
  "id": "multiplicacao",
  "titulo": "Pães e peixes às margens do lago",
  "subtitulo": "Mar da Galileia · Betsaida · Cafarnaum",
  "texto": "Mc 6,30–56",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "A localização exata do milagre é debatida; Betsaida e o lago dão contexto geográfico.",
  "testamento": "NT",
  "grupo": "Vida pública de Jesus",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Mar da Galileia",
    "lat": 32.81,
    "lon": 35.6,
    "nota": "Referência ao lago, não ao ponto de um milagre."
   },
   {
    "nome": "Betsaida (região proposta)",
    "lat": 32.907,
    "lon": 35.625,
    "nota": "Duas identificações arqueológicas principais são discutidas."
   },
   {
    "nome": "Cafarnaum",
    "lat": 32.882,
    "lon": 35.575,
    "nota": "Sítio arqueológico tradicionalmente identificado com Cafarnaum."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/mark/6"
   }
  ]
 },
 {
  "id": "gerasenos",
  "titulo": "Jesus e o homem na margem oriental",
  "subtitulo": "Mar da Galileia · Margem oriental do lago",
  "texto": "Mc 5,1–20",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "As designações gerasenos, gadarenos e gergesenos variam nas tradições textuais; nenhum ponto exato é imposto.",
  "testamento": "NT",
  "grupo": "Vida pública de Jesus",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Mar da Galileia",
    "lat": 32.81,
    "lon": 35.6,
    "nota": "Referência ao lago, não ao ponto de um milagre."
   },
   {
    "nome": "Margem oriental do lago (região)",
    "lat": 32.8,
    "lon": 35.66,
    "nota": "Região dos relatos de gerasenos/gadarenos; aldeia exata discutida."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/mark/5"
   }
  ]
 },
 {
  "id": "nain",
  "titulo": "Jesus visita Naim",
  "subtitulo": "Cafarnaum · Naim",
  "texto": "Lc 7,1–17",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "Lucas menciona Cafarnaum e depois a chegada a Naim; não descreve o caminho.",
  "testamento": "NT",
  "grupo": "Vida pública de Jesus",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Cafarnaum",
    "lat": 32.882,
    "lon": 35.575,
    "nota": "Sítio arqueológico tradicionalmente identificado com Cafarnaum."
   },
   {
    "nome": "Naim",
    "lat": 32.632,
    "lon": 35.346,
    "nota": "Povoado tradicionalmente identificado com Naim dos Evangelhos."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/luke/7"
   }
  ]
 },
 {
  "id": "samaritana",
  "titulo": "Jesus e a mulher samaritana",
  "subtitulo": "Jerusalém · Sicar · Galileia",
  "texto": "Jo 4,1–42",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "O movimento de Judeia para Galileia via Samaria é narrado, mas a identificação precisa de Sicar é discutida.",
  "testamento": "NT",
  "grupo": "Vida pública de Jesus",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   },
   {
    "nome": "Sicar (identificação proposta)",
    "lat": 32.211,
    "lon": 35.282,
    "nota": "Região tradicional do poço de Jacó, perto de Siquém."
   },
   {
    "nome": "Galileia (região)",
    "lat": 32.828,
    "lon": 35.308,
    "nota": "Marcador geográfico ilustrativo, não um ponto narrativo exato."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/john/4"
   }
  ]
 },
 {
  "id": "cesareia-filipe",
  "titulo": "Confissão de Pedro em Cesareia de Filipe",
  "subtitulo": "Cesareia de Filipe",
  "texto": "Mc 8,27–33",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O texto fala das aldeias da região de Cesareia de Filipe, não de uma sala específica.",
  "testamento": "NT",
  "grupo": "Vida pública de Jesus",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Cesareia de Filipe (Banias)",
    "lat": 33.249,
    "lon": 35.695,
    "nota": "Identificação geográfica comum com Banias."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/mark/8"
   }
  ]
 },
 {
  "id": "transfiguracao",
  "titulo": "Transfiguração: o monte não identificado",
  "subtitulo": "Monte Tabor · Galileia",
  "texto": "Mc 9,2–13",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O monte Tabor é identificação devocional tradicional, mas os evangelhos não indicam seu nome.",
  "testamento": "NT",
  "grupo": "Vida pública de Jesus",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Monte Tabor",
    "lat": 32.688,
    "lon": 35.39,
    "nota": "Monte identificado na geografia regional; relação com a Transfiguração é tradição, não afirmação textual."
   },
   {
    "nome": "Galileia (região)",
    "lat": 32.828,
    "lon": 35.308,
    "nota": "Marcador geográfico ilustrativo, não um ponto narrativo exato."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/mark/9"
   }
  ]
 },
 {
  "id": "lazaro-betania",
  "titulo": "Lázaro em Betânia",
  "subtitulo": "Betânia · Jerusalém",
  "texto": "Jo 11–12",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Betânia e Jerusalém aparecem no relato; a posição exata da casa não está demonstrada.",
  "testamento": "NT",
  "grupo": "Jerusalém e Páscoa",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Betânia",
    "lat": 31.77,
    "lon": 35.262,
    "nota": "Localidade tradicionalmente associada à Betânia dos Evangelhos."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/john/11"
   }
  ]
 },
 {
  "id": "jerico-jerusalem",
  "titulo": "De Jericó a Jerusalém",
  "subtitulo": "Jericó · Betânia · Jerusalém",
  "texto": "Lc 18–19; Mc 11",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "Sequência narrativa resumida; o caminho real por desníveis e trilhas antigas não está reconstruído.",
  "testamento": "NT",
  "grupo": "Jerusalém e Páscoa",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Jericó",
    "lat": 31.869,
    "lon": 35.444,
    "nota": "Área da antiga Tell es-Sultan; a cronologia arqueológica é debatida."
   },
   {
    "nome": "Betânia",
    "lat": 31.77,
    "lon": 35.262,
    "nota": "Localidade tradicionalmente associada à Betânia dos Evangelhos."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/luke/19"
   }
  ]
 },
 {
  "id": "semana-santa",
  "titulo": "Semana Santa: lugares tradicionais",
  "subtitulo": "Área do Templo de Jerusalém · Cenáculo · Getsêmani · Calvário",
  "texto": "Mc 14–15; Jo 18–19",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Cenáculo, Getsêmani e Calvário são apresentados como locais tradicionais; alguns sítios permanecem historicamente debatidos.",
  "testamento": "NT",
  "grupo": "Jerusalém e Páscoa",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Área do Templo de Jerusalém",
    "lat": 31.778,
    "lon": 35.235,
    "nota": "Referência da área sagrada; não uma reconstrução exata do Templo do século I."
   },
   {
    "nome": "Cenáculo (local tradicional)",
    "lat": 31.772,
    "lon": 35.23,
    "nota": "Local tradicional na colina de Sião, sem identificação arqueológica inequívoca."
   },
   {
    "nome": "Getsêmani (local tradicional)",
    "lat": 31.779,
    "lon": 35.24,
    "nota": "Jardim tradicional no monte das Oliveiras; localização litúrgica tradicional."
   },
   {
    "nome": "Calvário (local tradicional)",
    "lat": 31.779,
    "lon": 35.23,
    "nota": "Área da atual igreja do Santo Sepulcro; identificação histórica debatida."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/mark/14"
   }
  ]
 },
 {
  "id": "emaus",
  "titulo": "O caminho de Emaús",
  "subtitulo": "Jerusalém · Emaús",
  "texto": "Lc 24,13–35",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "A localização de Emaús é objeto de diferentes hipóteses; a linha do caminho não deve ser desenhada como certeza.",
  "testamento": "NT",
  "grupo": "Jerusalém e Páscoa",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   },
   {
    "nome": "Emaús (identificação debatida)",
    "lat": 31.842,
    "lon": 34.988,
    "nota": "Uma das propostas de localização: Emaús-Nicópolis; outras identificações existem."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/luke/24"
   }
  ]
 },
 {
  "id": "pascoa-galileia",
  "titulo": "Aparições do Ressuscitado",
  "subtitulo": "Jerusalém · Mar da Galileia · Galileia",
  "texto": "Jo 20–21; Mt 28",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Conjunto de aparições relatadas em livros e momentos diferentes, não uma viagem sequencial.",
  "testamento": "NT",
  "grupo": "Jerusalém e Páscoa",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   },
   {
    "nome": "Mar da Galileia",
    "lat": 32.81,
    "lon": 35.6,
    "nota": "Referência ao lago, não ao ponto de um milagre."
   },
   {
    "nome": "Galileia (região)",
    "lat": 32.828,
    "lon": 35.308,
    "nota": "Marcador geográfico ilustrativo, não um ponto narrativo exato."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/john/21"
   }
  ]
 },
 {
  "id": "pentecostes",
  "titulo": "Pentecostes em Jerusalém",
  "subtitulo": "Jerusalém",
  "texto": "At 2",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Atos situa o evento em Jerusalém, sem identificar inequivocamente a sala.",
  "testamento": "NT",
  "grupo": "Igreja nascente",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/acts/2"
   }
  ]
 },
 {
  "id": "filipe-samaria-gaza",
  "titulo": "Filipe: Samaria e o caminho de Gaza",
  "subtitulo": "Samaria · Gaza",
  "texto": "At 8",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "O lugar exato do encontro com o etíope na estrada de Gaza não é indicado.",
  "testamento": "NT",
  "grupo": "Igreja nascente",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Samaria (Sebaste)",
    "lat": 32.277,
    "lon": 35.198,
    "nota": "Colina do sítio arqueológico da antiga capital do reino de Israel."
   },
   {
    "nome": "Gaza (região urbana)",
    "lat": 31.5,
    "lon": 34.466,
    "nota": "Referência geográfica de Gaza, não ponto arqueológico de um evento antigo."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/acts/8"
   }
  ]
 },
 {
  "id": "pedro-costa",
  "titulo": "Pedro: Lida, Jope e Cesareia",
  "subtitulo": "Lida · Jope · Cesareia Marítima",
  "texto": "At 9–10",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "A sequência de deslocamentos é narrada em Atos, sem os detalhes do trajeto entre as cidades.",
  "testamento": "NT",
  "grupo": "Igreja nascente",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Lida (Lod)",
    "lat": 31.953,
    "lon": 34.893,
    "nota": "Cidade situada na planície costeira."
   },
   {
    "nome": "Jope (Jafa)",
    "lat": 32.052,
    "lon": 34.751,
    "nota": "Porto histórico na atual Jafa, área de Tel Aviv."
   },
   {
    "nome": "Cesareia Marítima",
    "lat": 32.5,
    "lon": 34.893,
    "nota": "Cidade romana portuária de Cesareia."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/acts/9"
   }
  ]
 },
 {
  "id": "paulo-conversao",
  "titulo": "Paulo: Damasco, Jerusalém e Tarso",
  "subtitulo": "Damasco · Jerusalém · Tarso",
  "texto": "At 9,1–30",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "Os destinos aparecem em At 9; o lugar exato do encontro com Cristo a caminho de Damasco não é definido.",
  "testamento": "NT",
  "grupo": "Viagens de Paulo",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Damasco",
    "lat": 33.513,
    "lon": 36.292,
    "nota": "Capital síria mencionada em Atos."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   },
   {
    "nome": "Tarso",
    "lat": 36.918,
    "lon": 34.892,
    "nota": "Cidade na Cilícia associada a Paulo."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/acts/9"
   }
  ]
 },
 {
  "id": "antioquia-igreja",
  "titulo": "A Igreja de Antioquia",
  "subtitulo": "Antioquia da Síria · Jerusalém",
  "texto": "At 11,19–30",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Antioquia e Jerusalém estão ligadas ao serviço e à missão da comunidade, sem itinerário detalhado.",
  "testamento": "NT",
  "grupo": "Igreja nascente",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Antioquia da Síria (Antáquia)",
    "lat": 36.202,
    "lon": 36.16,
    "nota": "Cidade de Antioquia do Orontes (atual Antakya)."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/acts/11"
   }
  ]
 },
 {
  "id": "paulo-primeira-viagem",
  "titulo": "Primeira viagem missionária de Paulo",
  "subtitulo": "Antioquia da Síria · Selêucia Piéria · Salamina · Pafos · Perge · Antioquia da Pisídia · Icônio · Listra · Derbe",
  "texto": "At 13–14",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "Etapas expressamente citadas por Atos, apresentadas em sequência narrativa e não como rotas rodoviárias/marítimas reconstruídas.",
  "testamento": "NT",
  "grupo": "Viagens de Paulo",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Antioquia da Síria (Antáquia)",
    "lat": 36.202,
    "lon": 36.16,
    "nota": "Cidade de Antioquia do Orontes (atual Antakya)."
   },
   {
    "nome": "Selêucia Piéria",
    "lat": 36.117,
    "lon": 35.925,
    "nota": "Porto antigo de Antioquia."
   },
   {
    "nome": "Salamina (Chipre)",
    "lat": 35.184,
    "lon": 33.902,
    "nota": "Sítio da antiga Salamina."
   },
   {
    "nome": "Pafos",
    "lat": 34.76,
    "lon": 32.418,
    "nota": "Cidade cipriota."
   },
   {
    "nome": "Perge",
    "lat": 36.963,
    "lon": 30.857,
    "nota": "Sítio arqueológico da Panfília."
   },
   {
    "nome": "Antioquia da Pisídia",
    "lat": 38.296,
    "lon": 31.188,
    "nota": "Cidade romana perto de Yalvaç."
   },
   {
    "nome": "Icônio (Konya)",
    "lat": 37.87,
    "lon": 32.493,
    "nota": "Atual Konya, identificação geográfica."
   },
   {
    "nome": "Listra (área proposta)",
    "lat": 37.6,
    "lon": 32.25,
    "nota": "Localização arqueológica proposta ao sul de Icônio."
   },
   {
    "nome": "Derbe (local proposto)",
    "lat": 37.35,
    "lon": 33.38,
    "nota": "Localização arqueológica discutida; marcador ilustrativo da região."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/acts/13"
   }
  ]
 },
 {
  "id": "paulo-segunda-viagem",
  "titulo": "Segunda viagem missionária de Paulo",
  "subtitulo": "Antioquia da Síria · Derbe · Listra · Trôade · Filipos · Tessalônica · Bereia · Atenas · Corinto · Éfeso · Cesareia Marítima",
  "texto": "At 15,36–18,22",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "Mapa-resumo de localidades citadas; o texto não detalha todas as estradas e paradas intermediárias.",
  "testamento": "NT",
  "grupo": "Viagens de Paulo",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Antioquia da Síria (Antáquia)",
    "lat": 36.202,
    "lon": 36.16,
    "nota": "Cidade de Antioquia do Orontes (atual Antakya)."
   },
   {
    "nome": "Derbe (local proposto)",
    "lat": 37.35,
    "lon": 33.38,
    "nota": "Localização arqueológica discutida; marcador ilustrativo da região."
   },
   {
    "nome": "Listra (área proposta)",
    "lat": 37.6,
    "lon": 32.25,
    "nota": "Localização arqueológica proposta ao sul de Icônio."
   },
   {
    "nome": "Trôade (Alexandria Trôade)",
    "lat": 39.762,
    "lon": 26.167,
    "nota": "Porto antigo da costa egeia."
   },
   {
    "nome": "Filipos",
    "lat": 41.012,
    "lon": 24.286,
    "nota": "Sítio arqueológico da cidade romana."
   },
   {
    "nome": "Tessalônica",
    "lat": 40.639,
    "lon": 22.945,
    "nota": "Cidade macedônica."
   },
   {
    "nome": "Bereia (Véria)",
    "lat": 40.521,
    "lon": 22.203,
    "nota": "Cidade da Macedônia."
   },
   {
    "nome": "Atenas",
    "lat": 37.975,
    "lon": 23.728,
    "nota": "Cidade da Ática; Areópago no entorno da Acrópole."
   },
   {
    "nome": "Corinto",
    "lat": 37.907,
    "lon": 22.879,
    "nota": "Sítio da antiga Corinto."
   },
   {
    "nome": "Éfeso",
    "lat": 37.94,
    "lon": 27.342,
    "nota": "Ruínas da cidade na Ásia Menor."
   },
   {
    "nome": "Cesareia Marítima",
    "lat": 32.5,
    "lon": 34.893,
    "nota": "Cidade romana portuária de Cesareia."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/acts/16"
   }
  ]
 },
 {
  "id": "paulo-terceira-viagem",
  "titulo": "Terceira viagem missionária de Paulo",
  "subtitulo": "Antioquia da Síria · Éfeso · Trôade · Assos · Mitilene · Mileto · Tiro · Cesareia Marítima · Jerusalém",
  "texto": "At 18,23–21,17",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "Pontos textuais de Atos, omitindo trechos vagos ou sem cidades definidas; ligações retas não são vias antigas.",
  "testamento": "NT",
  "grupo": "Viagens de Paulo",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Antioquia da Síria (Antáquia)",
    "lat": 36.202,
    "lon": 36.16,
    "nota": "Cidade de Antioquia do Orontes (atual Antakya)."
   },
   {
    "nome": "Éfeso",
    "lat": 37.94,
    "lon": 27.342,
    "nota": "Ruínas da cidade na Ásia Menor."
   },
   {
    "nome": "Trôade (Alexandria Trôade)",
    "lat": 39.762,
    "lon": 26.167,
    "nota": "Porto antigo da costa egeia."
   },
   {
    "nome": "Assos",
    "lat": 39.487,
    "lon": 26.336,
    "nota": "Porto antigo da Trôade."
   },
   {
    "nome": "Mitilene",
    "lat": 39.108,
    "lon": 26.559,
    "nota": "Cidade da ilha de Lesbos."
   },
   {
    "nome": "Mileto",
    "lat": 37.532,
    "lon": 27.277,
    "nota": "Sítio arqueológico jônico."
   },
   {
    "nome": "Tiro",
    "lat": 33.27,
    "lon": 35.198,
    "nota": "Antiga cidade fenícia no litoral."
   },
   {
    "nome": "Cesareia Marítima",
    "lat": 32.5,
    "lon": 34.893,
    "nota": "Cidade romana portuária de Cesareia."
   },
   {
    "nome": "Jerusalém",
    "lat": 31.778,
    "lon": 35.236,
    "nota": "Centro histórico da cidade, não a localização de cada evento narrado."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/acts/20"
   }
  ]
 },
 {
  "id": "paulo-roma-navio",
  "titulo": "Paulo levado de navio a Roma",
  "subtitulo": "Cesareia Marítima · Sídon · Mira · Bons Portos · Malta · Siracusa · Régio da Calábria · Putéolos · Roma",
  "texto": "At 27–28",
  "qualidade": "sequência de lugares no relato; caminhos não identificados",
  "comentario": "Viagem marítima descrita em Atos; o ponto exato do naufrágio em Malta continua discutido.",
  "testamento": "NT",
  "grupo": "Viagens de Paulo",
  "tipo": "sequencia",
  "locais": [
   {
    "nome": "Cesareia Marítima",
    "lat": 32.5,
    "lon": 34.893,
    "nota": "Cidade romana portuária de Cesareia."
   },
   {
    "nome": "Sídon",
    "lat": 33.558,
    "lon": 35.372,
    "nota": "Cidade fenícia do litoral mediterrânico."
   },
   {
    "nome": "Mira",
    "lat": 36.26,
    "lon": 29.985,
    "nota": "Antiga cidade na Lícia."
   },
   {
    "nome": "Bons Portos (Creta)",
    "lat": 34.933,
    "lon": 24.807,
    "nota": "Baía tradicionalmente identificada com Bons Portos."
   },
   {
    "nome": "Malta (ilha)",
    "lat": 35.899,
    "lon": 14.514,
    "nota": "A ilha é identificada com Malta; local exato do naufrágio é discutido."
   },
   {
    "nome": "Siracusa",
    "lat": 37.075,
    "lon": 15.284,
    "nota": "Cidade siciliana."
   },
   {
    "nome": "Régio da Calábria",
    "lat": 38.111,
    "lon": 15.651,
    "nota": "Cidade do extremo sul da Itália."
   },
   {
    "nome": "Putéolos (Pozzuoli)",
    "lat": 40.82,
    "lon": 14.122,
    "nota": "Porto junto a Nápoles."
   },
   {
    "nome": "Roma",
    "lat": 41.902,
    "lon": 12.496,
    "nota": "Cidade capital do Império."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/acts/27"
   }
  ]
 },
 {
  "id": "igrejas-apocalipse",
  "titulo": "As sete Igrejas do Apocalipse",
  "subtitulo": "Éfeso · Esmirna · Pérgamo · Tiatira · Sardes · Filadélfia · Laodiceia",
  "texto": "Ap 1–3",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Sete comunidades citadas em sequência na carta profética, não um itinerário de João.",
  "testamento": "NT",
  "grupo": "Apocalipse",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Éfeso",
    "lat": 37.94,
    "lon": 27.342,
    "nota": "Ruínas da cidade na Ásia Menor."
   },
   {
    "nome": "Esmirna",
    "lat": 38.424,
    "lon": 27.143,
    "nota": "Cidade atualmente chamada Izmir."
   },
   {
    "nome": "Pérgamo",
    "lat": 39.12,
    "lon": 27.181,
    "nota": "Sítio arqueológico perto de Bergama."
   },
   {
    "nome": "Tiatira (Akhisar)",
    "lat": 38.919,
    "lon": 27.836,
    "nota": "Cidade da antiga Ásia Menor."
   },
   {
    "nome": "Sardes",
    "lat": 38.487,
    "lon": 28.043,
    "nota": "Sítio arqueológico próximo de Sart."
   },
   {
    "nome": "Filadélfia (Alaşehir)",
    "lat": 38.352,
    "lon": 28.522,
    "nota": "Cidade da antiga Lídia."
   },
   {
    "nome": "Laodiceia",
    "lat": 37.836,
    "lon": 29.107,
    "nota": "Sítio arqueológico próximo a Denizli."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/revelation/1"
   }
  ]
 },
 {
  "id": "joao-patmos",
  "titulo": "João em Patmos",
  "subtitulo": "Ilha de Patmos",
  "texto": "Ap 1,9–20",
  "qualidade": "mapa contextual; não representa uma rota",
  "comentario": "Patmos é nomeada, mas o local preciso da visão não pode ser marcado.",
  "testamento": "NT",
  "grupo": "Apocalipse",
  "tipo": "quadro",
  "locais": [
   {
    "nome": "Ilha de Patmos",
    "lat": 37.322,
    "lon": 26.549,
    "nota": "Ilha grega mencionada em Ap 1,9."
   }
  ],
  "fontes": [
   {
    "label": "USCCB — texto bíblico e notas da passagem (em inglês)",
    "url": "https://bible.usccb.org/bible/revelation/1"
   }
  ]
 }
];
 const initial=[
  ['paulo-macedonia','NT','Viagens de Paulo','sequencia'],
  ['paulo-tessalonica','NT','Viagens de Paulo','sequencia'],
  ['jesus-samaria','NT','Vida pública de Jesus','quadro'],
  ['abraao-canaa','AT','Patriarcas','sequencia'],
  ['infancia-jesus','NT','Infância de Jesus','sequencia']
 ];
 for(const [key,testamento,grupo,tipo] of initial){
  const route=pool.find(x=>x.id===key);if(!route)throw Error('Mapa-base ausente: '+key);
  route.testamento=testamento;route.grupo=grupo;route.tipo=tipo;
 }
 const existing=new Set(pool.map(r=>r.id));
 for(const route of additions){
  if(existing.has(route.id))continue;
  pool.push(route);existing.add(route.id);
 }
})();
