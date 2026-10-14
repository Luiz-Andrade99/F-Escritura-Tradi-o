/* Calendário romano e relatos eucarísticos: sínteses autorais com fontes. */
(()=>{
 'use strict';
 const f=window.FET_FORMACAO;
 if(!f||!Array.isArray(f.milagres))throw Error('Os estudos de formação não foram carregados.');
 f.calendario={
  "tempos": [
    {
      "grupo": "Tempos litúrgicos",
      "id": "advento",
      "titulo": "Advento",
      "periodo": "Começa quatro domingos antes do Natal e abre o novo ano litúrgico.",
      "origem": "Desenvolveu-se na Igreja antiga como preparação para celebrar a Natividade; no Ocidente, práticas locais de jejum e espera foram gradualmente organizadas em um tempo comum.",
      "finalidade": "Preparar o coração para a vinda de Cristo: recordar sua primeira vinda e manter viva a esperança da sua vinda gloriosa.",
      "vivencia": "Acompanhar as profecias bíblicas e a figura de João Batista; dedicar tempo à oração e à caridade. O Advento não é, no rito romano atual, uma segunda Quaresma obrigatória.",
      "biblia": "Is 40,1–5; Mc 1,1–8",
      "fontes": [
        {
          "label": "Leão XIV — catequese sobre o ano litúrgico (2026)",
          "url": "https://press.vatican.va/content/leo-xiv/pt/audiences/2026/documents/20260812-udienza-generale.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Tempos litúrgicos",
      "id": "natal",
      "titulo": "Tempo do Natal",
      "periodo": "Da celebração da Natividade até a festa do Batismo do Senhor, segundo o calendário vigente.",
      "origem": "A celebração anual do nascimento de Jesus difundiu-se de modo particular a partir dos séculos IV e V; a festa da Epifania e outras comemorações aprofundaram o ciclo da manifestação de Cristo.",
      "finalidade": "Contemplar a Encarnação: o Filho de Deus assume a natureza humana para nossa salvação.",
      "vivencia": "Participar das celebrações, meditar os relatos da infância de Jesus e traduzir a alegria natalina em acolhida e cuidado dos mais vulneráveis.",
      "biblia": "Lc 2,1–20; Jo 1,1–18",
      "fontes": [
        {
          "label": "Leão XIV — catequese sobre o ano litúrgico (2026)",
          "url": "https://press.vatican.va/content/leo-xiv/pt/audiences/2026/documents/20260812-udienza-generale.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Tempos litúrgicos",
      "id": "tempo-comum",
      "titulo": "Tempo Comum",
      "periodo": "Duas etapas: após o Batismo do Senhor e depois de Pentecostes, até o Advento.",
      "origem": "A organização atual do calendário romano dá continuidade às semanas fora dos ciclos próprios do Natal e da Páscoa, retomando a leitura progressiva da vida e dos ensinamentos de Cristo.",
      "finalidade": "Crescer no discipulado cotidiano. “Comum” refere-se às semanas numeradas, e não a um tempo sem importância espiritual.",
      "vivencia": "Meditar o Evangelho de cada domingo e praticar continuamente a caridade, a oração e a fidelidade nos deveres diários.",
      "biblia": "Mc 1,14–20; Lc 8,4–15",
      "fontes": [
        {
          "label": "Paulo VI — Mysterii Paschalis (1969)",
          "url": "https://www.vatican.va/content/paul-vi/pt/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Tempos litúrgicos",
      "id": "quaresma",
      "titulo": "Quaresma",
      "periodo": "Da Quarta-feira de Cinzas até antes da Missa da Ceia do Senhor na Quinta-feira Santa.",
      "origem": "As práticas de jejum e preparação para a Páscoa surgiram na Igreja antiga e se desenvolveram sobretudo nos primeiros séculos, em ligação com a preparação batismal e a penitência. Os quarenta dias evocam episódios bíblicos, especialmente o jejum de Jesus.",
      "finalidade": "Converter-se e preparar-se para a celebração da Paixão, Morte e Ressurreição de Cristo; recordar o Batismo e aprofundar a penitência.",
      "vivencia": "Praticar oração, jejum e esmola, participar das celebrações penitenciais e buscar a Reconciliação. Os domingos são sempre celebrações da Ressurreição, mesmo dentro da Quaresma.",
      "biblia": "Mt 4,1–11; Jl 2,12–18",
      "fontes": [
        {
          "label": "Concílio Vaticano II — Sacrosanctum Concilium, 102–111",
          "url": "https://press.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html"
        },
        {
          "label": "Leão XIV — catequese sobre o ano litúrgico (2026)",
          "url": "https://press.vatican.va/content/leo-xiv/pt/audiences/2026/documents/20260812-udienza-generale.html"
        }
      ]
    },
    {
      "grupo": "Tempos litúrgicos",
      "id": "triduo",
      "titulo": "Tríduo Pascal",
      "periodo": "Da Missa vespertina da Ceia do Senhor na Quinta-feira Santa até as Vésperas do Domingo de Páscoa.",
      "origem": "A celebração anual da Paixão e Ressurreição está entre os núcleos mais antigos da liturgia cristã. Os ritos do Tríduo foram desenvolvidos e restaurados ao longo dos séculos, com renovada centralidade da Vigília Pascal.",
      "finalidade": "Celebrar como uma unidade o mistério pascal: Ceia do Senhor, Paixão, sepultamento e Ressurreição.",
      "vivencia": "Participar da Missa da Ceia do Senhor, da Celebração da Paixão e da Vigília Pascal. A Sexta-feira Santa não tem Missa; ocorre a celebração litúrgica da Paixão.",
      "biblia": "Jo 13,1–15; Jo 18–19; Mc 16,1–8",
      "fontes": [
        {
          "label": "Concílio Vaticano II — Sacrosanctum Concilium, 102–111",
          "url": "https://press.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html"
        },
        {
          "label": "Leão XIV — catequese sobre o ano litúrgico (2026)",
          "url": "https://press.vatican.va/content/leo-xiv/pt/audiences/2026/documents/20260812-udienza-generale.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Tempos litúrgicos",
      "id": "pascoa",
      "titulo": "Tempo Pascal",
      "periodo": "Cinquenta dias, do Domingo da Ressurreição até Pentecostes.",
      "origem": "A Páscoa anual cristã já era celebrada nos primeiros séculos, e a tradição dos cinquenta dias como tempo de alegria e plenitude pascal tornou-se central na vida e na oração da Igreja.",
      "finalidade": "Viver a alegria da vitória de Cristo sobre a morte e renovar a graça do Batismo, culminando na celebração do dom do Espírito Santo.",
      "vivencia": "Meditar os relatos das aparições do Ressuscitado, a vida da comunidade nos Atos dos Apóstolos e a missão da Igreja.",
      "biblia": "Jo 20,1–29; At 2,1–11",
      "fontes": [
        {
          "label": "Concílio Vaticano II — Sacrosanctum Concilium, 102–111",
          "url": "https://press.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html"
        },
        {
          "label": "Leão XIV — catequese sobre o ano litúrgico (2026)",
          "url": "https://press.vatican.va/content/leo-xiv/pt/audiences/2026/documents/20260812-udienza-generale.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    }
  ],
  "festas": [
    {
      "grupo": "Solenidades e festas",
      "id": "epifania",
      "titulo": "Epifania do Senhor",
      "periodo": "6 de janeiro; no Brasil, geralmente transferida ao domingo previsto pelo calendário.",
      "origem": "Festa antiga do Oriente cristão, depois acolhida e desenvolvida no Ocidente, celebrando a manifestação de Cristo aos povos.",
      "finalidade": "Reconhecer Jesus como Salvador destinado a todas as nações.",
      "vivencia": "Meditar a visita dos Magos e a universalidade do Evangelho.",
      "biblia": "Mt 2,1–12",
      "fontes": [
        {
          "label": "Paulo VI — Mysterii Paschalis (1969)",
          "url": "https://www.vatican.va/content/paul-vi/pt/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "batismo-senhor",
      "titulo": "Batismo do Senhor",
      "periodo": "Ao final do Tempo do Natal, conforme calendário.",
      "origem": "Ligada à memória da manifestação pública de Jesus e às tradições antigas associadas à Epifania.",
      "finalidade": "Contemplar a revelação do Filho e o início de seu ministério público.",
      "vivencia": "Renovar a consciência das promessas do próprio Batismo.",
      "biblia": "Mt 3,13–17",
      "fontes": [
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "apresentacao",
      "titulo": "Apresentação do Senhor",
      "periodo": "2 de fevereiro.",
      "origem": "Recorda a apresentação de Jesus no Templo e o encontro com Simeão e Ana. A celebração foi desenvolvida na tradição antiga de Jerusalém e difundida no Ocidente.",
      "finalidade": "Reconhecer Cristo como luz para as nações e oferta ao Pai.",
      "vivencia": "Acompanhar a procissão e bênção das velas quando previstas; meditar sobre a entrega de si a Deus.",
      "biblia": "Lc 2,22–38",
      "fontes": [
        {
          "label": "Paulo VI — Mysterii Paschalis (1969)",
          "url": "https://www.vatican.va/content/paul-vi/pt/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "anunciacao",
      "titulo": "Anunciação do Senhor",
      "periodo": "25 de março, com transferência quando prescrita pelo calendário.",
      "origem": "Desenvolvida na liturgia antiga a partir da contemplação do anúncio do anjo a Maria e do mistério da Encarnação.",
      "finalidade": "Celebrar a concepção de Jesus por obra do Espírito Santo e a disponibilidade de Maria à vontade divina.",
      "vivencia": "Rezar pelo acolhimento da Palavra e reconhecer a dignidade da vida humana desde a concepção.",
      "biblia": "Lc 1,26–38",
      "fontes": [
        {
          "label": "Concílio Vaticano II — Sacrosanctum Concilium, 102–111",
          "url": "https://press.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "ramos",
      "titulo": "Domingo de Ramos e da Paixão do Senhor",
      "periodo": "Domingo que inicia a Semana Santa.",
      "origem": "A lembrança litúrgica da entrada de Jesus em Jerusalém aparece de forma marcante nas antigas celebrações da cidade e foi incorporada gradualmente ao rito romano.",
      "finalidade": "Entrar na Semana Santa unindo o reconhecimento de Cristo Rei à contemplação da sua Paixão.",
      "vivencia": "Participar da procissão ou entrada solene e escutar com atenção a narrativa da Paixão.",
      "biblia": "Mt 21,1–11; Mt 26–27",
      "fontes": [
        {
          "label": "Concílio Vaticano II — Sacrosanctum Concilium, 102–111",
          "url": "https://press.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "ascensao",
      "titulo": "Ascensão do Senhor",
      "periodo": "Quarenta dias após a Páscoa; em muitos lugares, incluindo o Brasil, celebrada no domingo seguinte.",
      "origem": "Desde a antiguidade, a liturgia cristã distinguiu a Ascensão dentro dos acontecimentos do Tempo Pascal.",
      "finalidade": "Proclamar que Cristo ressuscitado está glorificado junto do Pai e permanece presente à Igreja de outro modo.",
      "vivencia": "Cultivar a esperança cristã e o compromisso missionário.",
      "biblia": "At 1,6–11",
      "fontes": [
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "pentecostes",
      "titulo": "Pentecostes",
      "periodo": "Quinquagésimo dia do Tempo Pascal.",
      "origem": "Herda o nome de uma festa judaica e foi celebrada desde os primeiros séculos cristãos como plenitude da Páscoa e memória do dom do Espírito.",
      "finalidade": "Reconhecer a ação do Espírito Santo, que fortalece os discípulos e reúne a Igreja.",
      "vivencia": "Pedir seus dons e assumir uma postura de reconciliação, missão e unidade.",
      "biblia": "At 2,1–11",
      "fontes": [
        {
          "label": "Leão XIV — catequese sobre o ano litúrgico (2026)",
          "url": "https://press.vatican.va/content/leo-xiv/pt/audiences/2026/documents/20260812-udienza-generale.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "trindade",
      "titulo": "Santíssima Trindade",
      "periodo": "Domingo após Pentecostes.",
      "origem": "A confissão trinitária é central desde os primórdios da fé cristã; a solenidade própria difundiu-se na Idade Média e entrou no calendário da Igreja latina.",
      "finalidade": "Adorar o único Deus em três Pessoas, princípio e fim da vida cristã.",
      "vivencia": "Rezar conscientemente as doxologias e o sinal da cruz.",
      "biblia": "Mt 28,18–20",
      "fontes": [
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "corpus-christi",
      "titulo": "Santíssimo Corpo e Sangue de Cristo (Corpus Christi)",
      "periodo": "Quinta-feira depois da solenidade da Trindade onde se conserva a data tradicional; observar o calendário local.",
      "origem": "A devoção eucarística ligada a Juliana de Cornillon impulsionou a festa em Liège; o papa Urbano IV estendeu-a à Igreja universal em 1264 pela bula Transiturus de mundo.",
      "finalidade": "Adorar a presença real de Cristo na Eucaristia e testemunhar publicamente a fé eucarística.",
      "vivencia": "Participar da Missa e, onde houver, da procissão eucarística. A festa não depende de um suposto milagre particular de Bolsena para ter fundamento teológico.",
      "biblia": "1Cor 11,23–26; Jo 6,51–58",
      "fontes": [
        {
          "label": "Urbano IV — Transiturus de mundo (1264)",
          "url": "https://www.vatican.va/content/urbanus-iv/pt/documents/bulla-transiturus-de-mundo-11-aug-1264.html"
        },
        {
          "label": "Bento XVI — Santa Juliana e Corpus Christi (2010)",
          "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20101117.html"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "sagrado-coracao",
      "titulo": "Sagrado Coração de Jesus",
      "periodo": "Sexta-feira depois do segundo domingo após Pentecostes, conforme o calendário romano.",
      "origem": "Desenvolveu-se da espiritualidade cristológica medieval e da devoção ao Coração de Jesus, especialmente difundida a partir da época moderna.",
      "finalidade": "Contemplar o amor humano e divino de Cristo, manifestado plenamente em sua entrega por nós.",
      "vivencia": "Praticar a reparação, a confiança na misericórdia e a caridade concreta.",
      "biblia": "Jo 19,31–37; 1Jo 4,7–16",
      "fontes": [
        {
          "label": "Paulo VI — Mysterii Paschalis (1969)",
          "url": "https://www.vatican.va/content/paul-vi/pt/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "assuncao",
      "titulo": "Assunção de Nossa Senhora",
      "periodo": "15 de agosto; no Brasil, celebração frequentemente transferida para domingo conforme normas.",
      "origem": "Festa muito antiga da tradição cristã oriental, desenvolvida no Ocidente; o dogma da Assunção foi definido por Pio XII em 1950.",
      "finalidade": "Celebrar a participação singular de Maria na vitória de Cristo e a esperança da ressurreição dos fiéis.",
      "vivencia": "Contemplar a esperança da vida eterna, sem confundir a Assunção de Maria com a Ascensão de Cristo.",
      "biblia": "Ap 12,1; Lc 1,39–56",
      "fontes": [
        {
          "label": "Paulo VI — Mysterii Paschalis (1969)",
          "url": "https://www.vatican.va/content/paul-vi/pt/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html"
        },
        {
          "label": "Concílio Vaticano II — Sacrosanctum Concilium, 102–111",
          "url": "https://press.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "todos-santos",
      "titulo": "Todos os Santos",
      "periodo": "1º de novembro; no Brasil, normalmente transferida para domingo.",
      "origem": "A memória conjunta de mártires e santos foi se consolidando em diferentes calendários até a celebração universal.",
      "finalidade": "Louvar a santidade de Deus manifestada em seus servos e recordar a vocação universal à santidade.",
      "vivencia": "Tomar como exemplo a fé, a esperança e a caridade dos santos, com Cristo no centro.",
      "biblia": "Mt 5,1–12",
      "fontes": [
        {
          "label": "Concílio Vaticano II — Sacrosanctum Concilium, 102–111",
          "url": "https://press.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html"
        },
        {
          "label": "Paulo VI — Mysterii Paschalis (1969)",
          "url": "https://www.vatican.va/content/paul-vi/pt/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "fieis-defuntos",
      "titulo": "Comemoração de Todos os Fiéis Defuntos",
      "periodo": "2 de novembro.",
      "origem": "A oração pelos falecidos é antiga; a comemoração de 2 de novembro se difundiu no Ocidente a partir da tradição monástica, especialmente Cluny.",
      "finalidade": "Interceder pelos falecidos e professar a ressurreição e a misericórdia de Deus.",
      "vivencia": "Participar da Missa e rezar pelos mortos. É uma comemoração, não uma solenidade idêntica a Todos os Santos.",
      "biblia": "2Mc 12,43–46; Jo 11,17–27",
      "fontes": [
        {
          "label": "Paulo VI — Mysterii Paschalis (1969)",
          "url": "https://www.vatican.va/content/paul-vi/pt/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "cristo-rei",
      "titulo": "Nosso Senhor Jesus Cristo, Rei do Universo",
      "periodo": "Último domingo do ano litúrgico, imediatamente antes do Advento.",
      "origem": "Instituída por Pio XI em 1925; a reforma do calendário romano colocou-a ao final do ano litúrgico, realçando a consumação do Reino.",
      "finalidade": "Reconhecer o senhorio de Cristo, que se manifesta no amor, na verdade e na justiça, e esperar sua vinda gloriosa.",
      "vivencia": "Examinar se as escolhas pessoais e sociais se deixam orientar pelo Evangelho.",
      "biblia": "Mt 25,31–46; Jo 18,33–37",
      "fontes": [
        {
          "label": "Paulo VI — Mysterii Paschalis (1969)",
          "url": "https://www.vatican.va/content/paul-vi/pt/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html"
        },
        {
          "label": "USCCB — tempos do ano litúrgico",
          "url": "https://www.usccb.org/prayer-worship/liturgical-year"
        }
      ]
    },
    {
      "grupo": "Solenidades e festas",
      "id": "imaculada",
      "titulo": "Imaculada Conceição de Maria",
      "periodo": "8 de dezembro, observadas as regras de precedência e transferência.",
      "origem": "A festa cresceu no Oriente e no Ocidente medieval. O dogma foi definido pelo papa Pio IX em 1854.",
      "finalidade": "Celebrar a graça de Deus que preservou Maria do pecado original em vista dos méritos de Cristo, desde sua concepção.",
      "vivencia": "Meditar o chamado à santidade; não confundir a Imaculada Conceição de Maria com a concepção virginal de Jesus.",
      "biblia": "Lc 1,26–38",
      "fontes": [
        {
          "label": "Concílio Vaticano II — Sacrosanctum Concilium, 102–111",
          "url": "https://press.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html"
        },
        {
          "label": "Paulo VI — Mysterii Paschalis (1969)",
          "url": "https://www.vatican.va/content/paul-vi/pt/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html"
        }
      ]
    }
  ],
  "devocoes": [
    {
      "grupo": "Quaresmas e devoções",
      "id": "quaresma-sao-miguel",
      "titulo": "Quaresma de São Miguel Arcanjo",
      "periodo": "De 15 de agosto até a proximidade de 29 de setembro, com variantes devocionais.",
      "origem": "A tradição franciscana recorda retiros de São Francisco de Assis no Monte Alverne; a Ordem Franciscana situa uma dessas quaresmas de oração e jejum entre a Assunção e a festa dos arcanjos, em 1224.",
      "finalidade": "Dedicar um período de oração, penitência, conversão e pedido da intercessão dos santos anjos, com Deus como único objeto de adoração.",
      "vivencia": "É devoção privada/familiar, não um tempo litúrgico do rito romano nem obrigação universal de jejum. O modo de praticar não deve prejudicar a saúde ou substituir os sacramentos.",
      "biblia": "Dn 12,1; Ap 12,7–12",
      "fontes": [
        {
          "label": "Ordem Franciscana — carta do VIII centenário dos estigmas (2024)",
          "url": "https://franciscanos.org.br/quemsomos/carta-do-ministro-geral-e-definitorio-para-o-viii-centenario-dos-estigmas/"
        },
        {
          "label": "Franciscanos — Quaresma de São Miguel, origem e finalidade",
          "url": "https://franciscanos.org.br/noticias/quaresma-de-sao-miguel-arcanjo-uma-tradicao-franciscana.html"
        }
      ]
    },
    {
      "grupo": "Quaresmas e devoções",
      "id": "quaresma-diferencas",
      "titulo": "Quaresma litúrgica e outras práticas de quarenta dias",
      "periodo": "De acordo com o calendário e a devoção adotada.",
      "origem": "A Igreja possui uma Quaresma oficial antes da Páscoa. Ao longo dos séculos, comunidades e santos também adotaram períodos pessoais de jejum e oração, por analogia bíblica, sem transformá-los em temporadas universais.",
      "finalidade": "Distinguir aquilo que a Igreja celebra oficialmente daquilo que pode ser livremente vivido como exercício de piedade.",
      "vivencia": "A penitência deve aproximar de Cristo, da oração, dos sacramentos e das obras de misericórdia. Uma novena, um tríduo e uma quaresma devocional não possuem a mesma posição no calendário litúrgico.",
      "biblia": "Mt 6,1–18; Mt 4,1–11",
      "fontes": [
        {
          "label": "Concílio Vaticano II — Sacrosanctum Concilium, 102–111",
          "url": "https://press.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html"
        },
        {
          "label": "Ordem Franciscana — carta do VIII centenário dos estigmas (2024)",
          "url": "https://franciscanos.org.br/quemsomos/carta-do-ministro-geral-e-definitorio-para-o-viii-centenario-dos-estigmas/"
        }
      ]
    }
  ]
};
 const novos=[
  {
    "id": "siena",
    "titulo": "Siena",
    "local": "Siena, Itália",
    "epoca": "1730",
    "chamada": "As hóstias consagradas conservadas na Basílica de São Francisco após um furto sacrílego.",
    "relato": "Em agosto de 1730, hóstias consagradas foram roubadas e depois encontradas na igreja de Santa Maria em Provenzano. Recolhidas e levadas novamente à Basílica de São Francisco, passaram a ser veneradas por sua conservação incomum.",
    "documentacao": "A Arquidiocese de Siena publica a história, exames e celebrações relativas às partículas conservadas, que são apresentadas como um prodígio eucarístico. Em 2014 a arquidiocese organizou um ano eucarístico e publicou os resultados de uma nova verificação. A narrativa deve ser apresentada como documentação eclesial, não como prova científica universal de uma causa sobrenatural.",
    "reconhecimento": "A Arquidiocese preserva publicamente a devoção e celebra a memória do prodígio. O fato de uma autoridade eclesial promover essa veneração não significa que todos os detalhes físicos foram determinados sem controvérsia.",
    "fontes": [
      [
        "Arquidiocese de Siena — história do prodígio",
        "https://www.arcidiocesi.siena.it/clean/anno-eucaristico/storia-miracolo"
      ],
      [
        "Arquidiocese de Siena — verificação em 2014",
        "https://www.arcidiocesi.siena.it/clean/anno-eucaristico/ricognizione-sacre-particole-2014"
      ]
    ]
  },
  {
    "id": "legnica",
    "titulo": "Legnica",
    "local": "Legnica, Polônia",
    "epoca": "2013–2016",
    "chamada": "Um acontecimento eucarístico investigado e comunicado pelo bispo local.",
    "relato": "Uma hóstia caiu durante a distribuição da Comunhão em 25 de dezembro de 2013, na paróquia de São Jacinto (Jacek), e foi colocada em água. Surgiram alterações avermelhadas, posteriormente examinadas.",
    "documentacao": "Após comissão e exames periciais, o bispo Zbigniew Kiernikowski anunciou em abril de 2016 que o caso apresentava características de um milagre eucarístico. A documentação episcopal menciona análises de tecido com semelhança a músculo cardíaco e recomendações de custódia e veneração. Resultados laboratoriais não determinam isoladamente a causa sobrenatural do evento.",
    "reconhecimento": "Houve comunicação episcopal e permissão para apresentação da relíquia à veneração, conforme recomendação comunicada pela Santa Sé. A formulação episcopal foi 'apresenta características de milagre', não uma definição dogmática universal.",
    "fontes": [
      [
        "Rádio Vaticano — comunicado do bispo de Legnica (2016)",
        "https://www.archivioradiovaticana.va/storico/2016/04/11/cud_eucharystyczny_w_legnicy_%E2%80%93_komunikat_biskupa_legnickiego/pl-1221956"
      ],
      [
        "Gość Legnicki — anúncio episcopal de 2016",
        "https://legnica.gosc.pl/gal/pokaz/3079901.Ogloszenie-o-wydarzeniu-eucharystycznym/16"
      ]
    ]
  },
  {
    "id": "sokolka",
    "titulo": "Sokółka",
    "local": "Sokółka, Polônia",
    "epoca": "2008–2011",
    "chamada": "A hóstia com alterações avermelhadas, investigada pela Cúria Metropolitana de Białystok.",
    "relato": "Em outubro de 2008, uma hóstia caiu durante a distribuição da Comunhão na igreja de Santo Antônio de Pádua. Depois de colocada em água, apresentou uma alteração avermelhada, motivando investigação e consultas a especialistas.",
    "documentacao": "Uma comissão eclesial concluiu em 2009 que, de acordo com as apurações realizadas, não fora identificada intervenção de terceiros. As autoridades eclesiais passaram a permitir a exposição para oração e peregrinação em 2011. Os resultados narrados pelos examinadores devem ser atribuídos a seus relatórios, sem extrapolações periciais.",
    "reconhecimento": "O caso recebeu acompanhamento e acolhimento no âmbito diocesano; a documentação foi encaminhada à Santa Sé. A expressão 'reconhecido na diocese' não equivale a um decreto universal declarando cientificamente comprovada sua origem sobrenatural.",
    "fontes": [
      [
        "Relato do comunicado da Cúria Metropolitana de Białystok (2009)",
        "https://isokolka.eu/sokolka/13461-panie-jezu-przymnoz-nam-wiary-archidiecezjalny-dzien-eucharystii-w-sokolce"
      ],
      [
        "Sokółka — aniversário e informações diocesanas (2023)",
        "https://sokolka.pl/2023/10/02/w-15-rocznice-cudu-eucharystycznego-w-sokolce/"
      ]
    ]
  }
];
 const ids=new Set(f.milagres.map(m=>m.id));
 for(const m of novos){if(!ids.has(m.id)){f.milagres.push(m);ids.add(m.id);}}
})();
