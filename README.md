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

> **ATUALIZAÇÃO 0.4.1 — 14/10/2026.** O menu de Meu caderno e Fontes e método permanece oculto, sem apagar notas locais. A seção Mapas bíblicos agora traz **um mapa real e interativo na própria página**, além dos três mapas dos percursos. É necessário acesso à internet para os mapas. A Bíblia **já está embutida para leitura**, mas continua sendo a edição de **Pe. Manuel de Matos Soares, não a versão do Pe. Antônio Pereira de Figueiredo** solicitada. A edição de Figueiredo na Samytech3D contém possíveis defeitos de OCR; não a atribuímos erroneamente à base digital existente. Substituir a tradução exige obter a transcrição integral, validar a procedência editorial e comparar os textos.

> **VERSÃO 0.4.0 — 14/10/2026.** Leitor bíblico interno com **73 livros, 1.334 capítulos, 35.816 versículos**. **Tradução exibida: Pe. Manuel de Matos Soares**, e **não** a Figueiredo indicada antes; veja [proveniência, licença e ressalvas](./biblia-dados/ORIGEM_E_LICENCA.md). A tradução de Matos Soares está em domínio público no Brasil desde 2026, e a compilação digital foi oferecida sob CC0 pelo mantenedor; a transcrição ainda pode conter erros de OCR. Os dez arquivos JSON são pré-armazenados na PWA para leitura offline, após a instalação/atualização bem-sucedida. Não há cobrança por leitura, API ou servidor.

> **Revisão doutrinária de 14/10/2026:** os 35 artigos receberam uma primeira auditoria individual e os principais esclarecimentos já foram incorporados. **Não há declaração de aprovação eclesiástica.** Leia [REVISAO_DOUTRINARIA_2026-10-14.md](./REVISAO_DOUTRINARIA_2026-10-14.md) para a matriz por artigo, fontes primárias e pendências de liturgia brasileira.

# Fé, Escritura & Tradição

**Versão 0.2.0 | PWA gratuita de formação na Igreja Católica Apostólica Romana | Português (Brasil)**

Um aplicativo educacional independente, baseado na doutrina da Igreja Católica Apostólica Romana e no rito romano usado no Brasil, que roda no navegador do iPhone, Android e computador. Foi desenvolvido em HTML, CSS e JavaScript puros para publicar no GitHub Pages **sem Node, hospedagem paga, banco de dados ou processo de compilação**.

**Estado em 14/10/2026:** código e conteúdo inicial preparados para publicação no repositório criado pelo usuário. A ativação da hospedagem e os testes em aparelho ainda precisam ser confirmados. A revisão teológica integral e o licenciamento da tradução não foram concluídos.

## Recursos funcionando

- 35 estudos originais introdutórios **pendentes de revisão teológica completa**, sobre a Santa Missa, ministérios da Igreja, os sete sacramentos, Bíblia e espiritualidade.
- Referências verificáveis para Catecismo, Código de Direito Canônico, *Dei Verbum*, Instrução Geral do Missal Romano e CNBB.
- Catálogo com os **73 livros da Bíblia católica** (46 + 27). A reprodução integral do texto bíblico depende de licença e **ainda não está disponível**.
- Pesquisa instantânea pelo conteúdo; filtros por seção; tema claro/escuro.
- Favoritos e anotações por tema ou livro, com persistência local no navegador.
- Backup e restauração das notas em JSON. A importação substitui o conteúdo local atual.
- PWA com ícones e leitura offline dos conteúdos internos após a primeira visita online e instalação do cache.
- Layout responsivo para smartphone, tablet e desktop.
- 6 verbetes-piloto em grego/hebraico e 3 itinerários com esquema geográfico, fontes, cautelas históricas e botão de roteiro para pesquisa com IA (sem API paga).

## Como publicar gratuitamente no GitHub Pages

1. Entre em [https://github.com/new](https://github.com/new), na sua conta GitHub.
2. Use o repositório público já criado: `Luiz-Andrade99/F-Escritura-Tradi-o`.
3. Extraia este ZIP no computador. Na página do repositório, use **Add file → Upload files** e envie **o conteúdo da pasta**, não uma pasta aninhada. O arquivo `index.html` precisa ficar na raiz do repositório, assim como `styles.css`, `app.js`, `content.js`, `pesquisa.js`, `sw.js`, `manifest.webmanifest`, `.nojekyll` e a pasta `icons/`.
4. Em **Settings → Pages**, em *Build and deployment*, escolha **Deploy from a branch**. Selecione **main** e **/(root)**. Salve.
5. Quando o GitHub sinalizar que a implantação terminou, abra:
   `https://luiz-andrade99.github.io/F-Escritura-Tradi-o/`
   Esse endereço só funcionará depois que os arquivos forem enviados e o GitHub Pages ativado.

No iPhone: abra o endereço no **Safari → Compartilhar → Adicionar à Tela de Início**.

**Observação:** GitHub Pages é adequado a sites estáticos, não executa um backend. Sites Pages são públicos. Não inclua informações pessoais ou segredos no código.

## Testar no Windows

Na pasta extraída, use um servidor HTTP local para ativar o service worker:

```powershell
python -m http.server 8000
```

Depois abra `http://localhost:8000/` no navegador. A abertura direta de `index.html` via `file://` mostra parte da interface, mas não habilita o funcionamento offline.

## Organização

```text
index.html               # Estrutura sem dependências externas
styles.css               # Interface responsiva
app.js                   # Navegação, pesquisa, favoritos e notas
content.js               # 35 estudos e catálogo bíblico
pesquisa.js              # verbetes originais, itinerários e fontes acadêmicas
manifest.webmanifest     # Metadados de instalação PWA
sw.js                    # Cache offline dos arquivos locais
icons/                   # Ícones do aplicativo
.nojekyll                # Impede processamento Jekyll desnecessário
```

## Privacidade e backups

As anotações, tema e favoritos ficam no `localStorage` do navegador. Não são enviados ao GitHub nem sincronizados entre dispositivos. Se você limpar os dados do Safari, reinstalar o app ou trocar de aparelho, poderá perder as notas: use **Meu caderno → Exportar backup JSON**.

## Fontes e limites editoriais

Conteúdos **originais, resumidos e introdutórios**, com links para as fontes. Esta versão não é uma publicação aprovada oficialmente pela Igreja e precisa de uma revisão teológica e litúrgica independente antes de ser recomendada como formação pública. As explicações seguem o rito romano; normas e adaptações brasileiras devem ser verificadas com a edição atual do Missal da CNBB. Alguns links direcionam à tradução da IGMR em inglês, adotada nos Estados Unidos, identificada como tal no app, para estudo da estrutura geral.

Não se reproduz o texto integral da Bíblia de Jerusalém, Ave-Maria, nem de outras edições comerciais, por questões de licenciamento. Da mesma forma, não foram copiados extensos textos litúrgicos. Para distribuir futuramente, obtenha autorização dos titulares de direitos antes de incluir textos completos.

## Auditoria e licença

Veja [AUDITORIA_EDITORIAL.md](AUDITORIA_EDITORIAL.md) para os 35 artigos e as verificações pendentes. A Bíblia da CNBB é a tradução preferencial para negociação de autorização, **não está licenciada** nesta versão. O leitor aponta provisoriamente para a USCCB em inglês.

## Evoluções planejadas

- Tradução bíblica católica com autorização de reprodução e leitor por capítulos.
- Revisão doutrinal por uma equipe competente, com classificação de nível de autoridade de cada referência.
- Ano litúrgico, detalhes de paramentos, ritos e devoções verificadas historicamente.
- Expansão do glossário, novas rotas históricas, mapas cartográficos com base geográfica licenciada e revisão crítica.
- Backup opcional entre aparelhos, somente depois de definir custo, segurança e consentimento.

## Licença

Código e textos desta versão de trabalho foram preparados para o projeto do usuário. Não há concessão automática de licença para conteúdos externos. Antes da publicação colaborativa, recomenda-se definir uma licença específica para o código e outra para os textos editoriais.

## Atualização 0.3.0 — 14/10/2026

- As seções **Meu caderno** e **Fontes e método** foram retiradas da navegação pública e não possuem mais rotas acessíveis pela interface. As notas locais, favoritos e referências por estudo foram preservados, sem perda de dados. O código dessas páginas foi conservado para futura reativação.
- **Mapas bíblicos**: substituída a imagem esquemática por mapa geográfico interativo Leaflet 1.9.4 + OpenStreetMap, com indicação e localização aproximada dos pontos relatados no texto. A linha tracejada mostra exclusivamente a sequência narrativa; **não é reconstrução arqueológica** da estrada percorrida. Requer internet para baixar os mapas modernos e segue a política de uso dos tiles OSM. Os mapas não são pré-carregados para uso offline.
- **Bíblia em português**: cada um dos 73 livros oferece seleção de seus capítulos, com leitura por links externos em https://santo.samytech3d.com.br/biblia. Trata-se da tradução clássica de Pe. Antônio Pereira de Figueiredo, a partir da Vulgata. O texto original é de domínio público, mas a transcrição digital da edição de 1950 apresenta possíveis erros de OCR (ex.: Jo 3; Gn 1). **Não copiamos o texto do site para o repositório**, ainda exigindo confronto crítico e esclarecimento quanto a elementos editoriais dessa digitalização.
- O catálogo contém os 73 livros católicos. Algumas abreviações nos links correspondem à edição histórica; numeração da Vulgata pode diferir de outras Bíblias, principalmente Salmos e Ester.
- **Privacidade e rede:** recursos do mapa carregam CSS e JS estáticos por https://unpkg.com e tiles por https://tile.openstreetmap.org; a leitura da Bíblia leva ao site Samytech3D. Esses serviços de terceiros são acessados apenas conforme a navegação do usuário, com suas próprias políticas de privacidade.
- **Validação:** verificada sintaxe JS de todos os arquivos, 73/73 nomes de livros mapeados, elementos de navegação ocultos, marcação de crédito OSM e versão do cache. **Ainda não houve teste funcional no iPhone nem validação de todos os links externos capítulo a capítulo**; ao publicar, conferir os links do site de origem, o carregamento das folhas cartográficas e o cache da PWA.

Fontes técnicas: https://leafletjs.com/examples/quick-start/ ; https://operations.osmfoundation.org/policies/tiles/ ; https://www.openstreetmap.org/copyright .

## Correção v0.3.1 — atualização da PWA e Bíblia em português

- Adicionado parâmetro de versão nos recursos CSS/JS do HTML para impedir que o service worker antigo sirva scripts ultrapassados.
- Service worker usa **rede primeiro** para HTML, JavaScript, CSS e manifesto; mantém fallback local sem conexão.
- O aplicativo força uma atualização de página uma vez por sessão após a instalação de um novo controlador da PWA.
- Identificação de versão agora mostra **0.3.1 · Bíblia em português** na lateral.
- As caixas embutidas **Meu caderno pessoal** foram ocultadas também de livros, estudos e mapas; as notas previamente salvas permanecem intactas no armazenamento local.
- Leitura da Bíblia de Figueiredo em português continua hospedada externamente em https://santo.samytech3d.com.br/biblia. O projeto não incorpora texto integral não revisado.
- Para escapar imediatamente do cache antigo, acessar `https://luiz-andrade99.github.io/F-Escritura-Tradi-o/?v=20261014-031-ptbr#/biblia`. A implantação do Pages precisa estar concluída.
