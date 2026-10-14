# Atualização 0.6.0 — catálogo internacional de Carlo Acutis

- **Acervo pesquisável no próprio site:** 150 fichas de referência construídas a partir dos títulos, países e períodos publicados no índice oficial em português da exposição de Carlo Acutis. São **108 entradas geográficas de 20 países/territórios**, 19 registros de santos/místicos, 5 registros marianos e 18 registros de comunhões extraordinárias. A exposição oficial declara **aproximadamente 136 relatos e 166 painéis**, portanto os 150 registros do site **não são 150 milagres independentes ou aprovados**. Painéis temáticos coletivos foram desdobrados em fichas; isso explica a diferença de contagem.
- O acervo foi estruturado em `acervo-carlo-acutis.js`. Inclui busca local por nome/ano/categoria e filtros por país ou grupo, e cada ficha possui rota interna `#/relato-eucaristico/<id>`.
- **Seis estudos individuais** continuam detalhados e podem ser abertos a partir das fichas correspondentes: Lanciano, Bolsena–Orvieto, Santarém, Siena, Legnica e Sokółka.
- **Direitos autorais:** não foram copiados painéis, fotos nem textos integrais da exposição. São apenas dados factuais do índice com redação original e referência externa para conferência. A gratuidade de download dos painéis não é licença automática de redistribuição irrestrita.
- **Cautelas históricas:** títulos medievais exigem revisão por fonte primária; incluída referência crítica no registro de Bruxelas, especialmente pela história de acusações antijudaicas. Não são publicadas afirmações de supostos laudos técnicos sem conferência.
- O índice foi comparado com https://www.miracolieucaristici.org/pr/Liste/list.html e referência oficial da associação https://www.carloacutis.com/pt/association/mostra-miracoli-eucaristici. A reprodução de estudos aprofundados dos demais casos permanece pendente de documentação individual.
- Revisões de UI: agrupamento separado entre catálogo amplo e seis casos estudados; pesquisa e filtros responsivos; indicação de quantidade correta e contraste em tema escuro; novo service worker que atualiza assets da versão 0.6.0.
- Não houve alteração dos 73 livros bíblicos, dos textos litúrgicos existentes ou dos estudos do Catecismo.

---

# Versão 0.5.2 — ano litúrgico e milagres eucarísticos

- **Santa Missa:** nova entrada *Ano litúrgico, as festas e as quaresmas*. Contém 6 tempos litúrgicos, 15 solenidades/festas/comemorações, 2 estudos sobre devoções e diferentes usos da palavra "quaresma". Cada tema expõe a origem histórica, a finalidade para a vida cristã, um modo de vivê-lo, referências bíblicas e fontes. Os conteúdos estão integrados ao site em `#/ano-liturgico` e `#/celebracao/<id>`.
- A Quaresma oficial prepara para a Páscoa. A chamada Quaresma de São Miguel é uma **devoção franciscana**, não uma estação litúrgica universal nem obrigação geral de jejum.
- **Milagres Eucarísticos:** os três casos inicialmente cadastrados não eram o total. Foram acrescentados Siena (1730), Legnica (2013–2016) e Sokółka (2008–2011), totalizando 6 estudos. Textos identificam separadamente tradição, documentos e forma de reconhecimento eclesial. O catálogo de Carlo Acutis tem aproximadamente 136 relatos, mas a existência de painel na coleção **não equivale** a um decreto universal de aprovação de cada episódio.
- Os novos textos estão em `calendario-e-milagres.js`, carregado após `formacao.js` e antes de `app.js`. Cache PWA atualizado; os dados da Bíblia permanecem intactos.
- Revisão documental usou `Sacrosanctum Concilium`, `Mysterii Paschalis`, bula `Transiturus de mundo`, audiência de Leão XIV em 2026, documentação da Ordem Franciscana e documentos diocesanos sobre Siena, Legnica e Sokółka.
- A confirmação de publicação e o teste visual em navegadores devem ser verificados depois do commit.

---

# Atualização v0.5.1 — 14/10/2026

## Navegação
- "Milagres Eucarísticos" e "Catecismo" aparecem na barra lateral apenas como áreas principais, exatamente como "Sacramentos"; os itens internos ficam disponíveis ao entrar na seção.
- Os textos de milagres e temas catequéticos não foram apagados.

## Auditoria temática e ampliação
- **Santa Missa:** 9 → 12 estudos. Novos: ano litúrgico e cores; memorial, sacrifício e banquete; participação interior e exterior dos fiéis. Referências: IGMR, CNBB, `Sacrosanctum Concilium` 14 e 47–48, CIC 1322–1419.
- **A Igreja:** 9 → 12 estudos. Novos: diocese/paróquia; vocação dos leigos; Magistério, concílios e limites da infalibilidade. Referências: `Lumen gentium` 18–25/30–38, CIC 871–933, cânn. 368–369 e 515–519.
- **Palavras originais:** 6 → 10 verbetes. Novos: `χάρις`, `πίστις`, `רוּחַ`, `בְּרִית`. Interpretações não derivam da etimologia isolada; distinção entre campo semântico e doutrina.
- **Mapas bíblicos:** 3 → 5 roteiros. Novos: Abraão, Harã→Siquém→Betel→Neguebe (Gn 12,4–9), e infância de Jesus, Belém→Egito→Nazaré (Mt 2). Coordenadas e linhas são **aproximações geográficas e não reconstrução arqueológica**. O local egípcio da estada da Sagrada Família não é indicado pelo Evangelho; marcador regional não indica uma cidade visitada.
- Ampliações estão em `ampliacao.js`, com ids únicos e checagem contra inserções duplicadas; corpus da Bíblia e documentos originais preservados.

## Fontes primárias
- https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html
- https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_po.html
- https://www.vatican.va/archive/cathechism_po/index_new/p1s2cap3_683-1065_po.html
- https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html
- https://bible.usccb.org/bible/genesis/12
- https://bible.usccb.org/bible/matthew/2

---

# Atualização v0.5.0 — 14/10/2026

**Mapas bíblicos:** camada vetorial OpenFreeMap/OSM com todos os rótulos de terceiros ocultados e substituídos por lista curada de países, mares e localidades em português. Percursos e locais bíblicos continuam sinalizados no mapa em português; pontos e segmentos são geográficos aproximados, não reconstruções históricas. Exige internet. O usuário pode precisar de atualização forçada devido ao service worker de versões antigas.

**Milagres Eucarísticos:** menu após Sacramentos, com navegação interna para Lanciano, Bolsena–Orvieto e Santarém, fontes pontifícias, dioceses e estudo de Linoli. Reconhecimento de santuário e devoção não é sinônimo de decreto universal sobre causalidade sobrenatural.

**Catecismo:** guia de estudo interno com quatro partes e doze temas originais referenciados por números do CIC. A **reprodução literal integral** do Catecismo não foi feita e depende dos direitos da Libreria Editrice Vaticana. Não chamar os resumos de edição completa do Catecismo.

**Interface:** removidos quadros gerais de revisão, advertências de IA e botões de roteiro com IA. Tradução bíblica incorporada permanece Pe. Manuel de Matos Soares; documentação de procedência continua no repositório.

**Fontes documentais usadas nos novos estudos:**
- https://beweb.chiesacattolica.it/percorsitematici/miracoli-eucaristici/il-miracolo-custodito-nella-chiesa-di-san-francesco/lanalisi-scientifica-delle-reliquie/
- https://pubmed.ncbi.nlm.nih.gov/4950729/
- https://www.vatican.va/content/benedict-xvi/it/audiences/2010/documents/hf_ben-xvi_aud_20101117.html
- https://www.diocesiorvietotodi.it/pellegrinaggio-del-corpus-domini-marcia-della-fede-da-bolsena-a-orvieto-nella-notte-tra-il-6-ed-il-7-giugno-2026/
- https://diocese-santarem.pt/lista/decreto-6/
- https://diocese-santarem.pt/santuario-do-santissimo-milagre/
- https://www.vatican.va/archive/cathechism_po/index_new/indice_po.html
- https://www.vatican.va/roman_curia/institutions_connected/lev/docs_lev/copyright_po.htm

---

# Ajustes de interface — 14/10/2026 (v0.4.2)

- Removidos da página inicial o bloco de instalação no iPhone e o aviso de revisão que o acompanhava.
- Removida do rodapé de cada capítulo a caixa “Nota de exatidão”. A identificação da tradução e os documentos de procedência e limitações permanecem no projeto.
- O leitor agora usa cor dinâmica no modo escuro, em vez do tom quase preto fixo. Também foram corrigidos o contraste do cabeçalho principal e a legibilidade de textos secundários.
- Mapas com OpenFreeMap/MapLibre: rótulos geográficos priorizam `name:pt`; quando o dado não tem tradução, aplica-se grafia latina, inglesa ou original. Locais e percursos bíblicos ficam rotulados em português no próprio mapa.
- Dependências remotas: MapLibre JS/CSS e mapas vetoriais OpenFreeMap; não há API paga ou chave privada.
- Os arquivos da Bíblia e a tradução Matos Soares existente não foram modificados. A revisão textual continua pendente.

---

# Atualização v0.4.1 — mapa geral dos percursos

- Menu público: Meu caderno e Fontes e método continuam ocultos; anotações salvas não são excluídas.
- Mapas bíblicos: visualização real do OpenStreetMap agora na página de entrada, com filtros por percurso; continuam disponíveis mapas individuais, localização aproximada e ressalvas geográficas.
- Bíblia: 73 livros incorporados, sem redirecionar para outro site. **A tradução Figueiredo da Samytech3D ainda não foi incorporada**. O leitor permanece usando Matos Soares, com procedência e limitações de OCR documentadas em `biblia-dados/ORIGEM_E_LICENCA.md`.
- Pendências de QA: confirmar visualização de tiles no GitHub Pages e conferir capítulos individualmente contra fontes impressas. Os mapas dependem de internet.

---

# Atualização v0.4.0 — Bíblia integrada

- Leitura integral **dentro do aplicativo**: 73 livros, 1.334 capítulos e 35.816 versículos, em 10 arquivos JSON (~5 MB).
- Tradução da base integral: **Pe. Manuel de Matos Soares** (domínio público no Brasil desde 2026). **Difere da tradução de Figueiredo inicialmente indicada pelo usuário**; essa edição específica ainda não foi incorporada.
- Base estruturada e revisada em caráter independente, disponibilizada em CC0 pelo projeto bibliacatolica/biblia. A integridade estrutural foi verificada; a literalidade textual contra impresso segue pendente.
- Cache da PWA inclui os dez pacotes bíblicos para leitura sem conexão após completar a instalação/atualização.
- Nenhum texto bíblico é carregado de uma API externa na tela de leitura.
- Veja [ORIGEM_E_LICENCA.md](./biblia-dados/ORIGEM_E_LICENCA.md).

---

# Atualização editorial — 14/10/2026

- Auditoria individual dos **35 artigos** realizada; esclarecimentos prioritários sobre Eucaristia, ministérios e sacramentos incorporados ao conteúdo.
- A interface agora sinaliza que os estudos têm revisão documental inicial **sem aprovação eclesiástica formal**.
- Necessário cotejar posturas e adaptações com o texto integral da IGMR brasileira da CNBB, atualizar referências canônicas e obter revisão humana independente.
- Estão pendentes auditoria acadêmica dos 6 verbetes e 3 rotas, e licenciamento de tradução bíblica integral.
- Consulte [REVISAO_DOUTRINARIA_2026-10-14.md](./REVISAO_DOUTRINARIA_2026-10-14.md).

---

# Estado do projeto em 14/10/2026 — v0.2.0

- Código PWA pronto para repositório público `Luiz-Andrade99/F-Escritura-Tradi-o`.
- 35 artigos, catálogo dos 73 livros, pesquisa, favoritos, anotações e offline implementados.
- CNBB e Catecismo são a base eclesial. A terceira edição brasileira do Missal Romano (uso nacional desde 3/12/2023) é referência litúrgica.
- Auditoria editorial estrutural efetuada, mas conferência de cada afirmação e revisão independente continuam pendentes. Veja AUDITORIA_EDITORIAL.md.
- Bíblia integral não disponibilizada por ausência de licença; tradução da CNBB é candidata para solicitação de autorização.
- URL projetada: https://luiz-andrade99.github.io/F-Escritura-Tradi-o/ (depende da ativação do Pages).

## Atualização funcional 0.3.0

- Navegação pública sem as áreas Meu caderno / Fontes e método. Dados de notas preservados no aparelho.
- 3 mapas de viagens bíblicas migrados para base cartográfica real do OpenStreetMap; pontos e segmentos narrativos continuam aproximados.
- Integração da leitura bíblica em português implementada por atalhos de capítulo para a tradução pública de Figueiredo hospedada na Samytech3D. **Texto não está embutido nem offline**.
- Adoção da tradução no aplicativo como texto embutido exige edição conferida, devido a possíveis defeitos de digitalização e a direitos de elementos editoriais de 1950.
- Implementação commitada no GitHub; implantação e teste em aparelhos ainda não confirmados.
