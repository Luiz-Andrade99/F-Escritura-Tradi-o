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
