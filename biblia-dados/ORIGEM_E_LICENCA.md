# Texto bíblico incorporado — origem, licença e limites de revisão

**Projeto:** Fé, Escritura & Tradição · Versão 0.4.0 · 14/10/2026.

## Tradução efetivamente incorporada

**Bíblia Sagrada — tradução do Pe. Manuel de Matos Soares (1878–1955)**, com base na Vulgata Sixto-Clementina. A versão digital estruturada é publicada pelo projeto independente:

- Fonte do corpus: https://github.com/bibliacatolica/biblia
- Arquivo original: `biblia-matos-soares-completa.json`
- Revisões declaradas pelo responsável: https://github.com/bibliacatolica/biblia/blob/main/IMPROVEMENTS.md
- Licença da compilação e curadoria digital: Creative Commons Zero, CC0 1.0 — https://github.com/bibliacatolica/biblia/blob/main/LICENSE
- Lei brasileira 9.610/1998, art. 41 (70 anos desde 1º de janeiro posterior ao falecimento): https://www2.camara.leg.br/legin/fed/lei/1998/lei-9610-19-fevereiro-1998-365399-normaatualizada-pl.html

O tradutor faleceu em 1955; os direitos patrimoniais da tradução expiraram no Brasil em 31/12/2025, ficando em domínio público desde **01/01/2026**, observadas as regras para componentes editoriais posteriores. A base digital foi oferecida com CC0 pelo seu responsável.

## IMPORTANTE: esta não é a Bíblia de Figueiredo

O usuário havia indicado previamente a tradução clássica de **Pe. Antônio Pereira de Figueiredo** apresentada em https://santo.samytech3d.com.br/biblia .

**Não foi possível obter durante esta atualização uma base integral independente, validada e claramente reutilizável daquela digitalização específica.** O texto de Figueiredo não foi copiado. Para fornecer os 73 livros dentro da PWA, usamos outra tradução católica, informada explicitamente no leitor. A eventual troca para Figueiredo deverá preservar a correspondência de numeração, capítulos e suplementos deuterocanônicos, além de registrar a proveniência digital e conferir erros de OCR.

## Avaliação da confiabilidade

A tradução histórica de Matos Soares teve `Nihil Obstat` e `Imprimatur` nas edições impressas de 1927/1932, **o que não equivale à aprovação oficial desta compilação digital** nem das correções automáticas modernas. O mantenedor do dataset informa que usou scripts e IA para corrigir centenas de falhas de OCR, mas reconhece a possibilidade de erros restantes.

A integridade **estrutural** conferida nesta incorporação:
- 73 livros canônicos católicos, incluindo deuterocanônicos e seções tradicionais de Ester e Daniel.
- 1.334 capítulos em ordem canônica.
- 35.816 entradas de versículos, cada uma com número inteiro e texto não vazio.
- 10 pacotes JSON no diretório `biblia-dados/`; cada livro foi preservado segundo a ordem do corpus de origem.
- Texto carregado dentro do app em `#/leitura/Nome-do-livro/capitulo`, sem chamadas de API externa de Bíblia; disponível offline quando o service worker da nova edição terminar de armazenar todos os pacotes.

**Não foi feita conferência palavra por palavra** contra uma edição impressa; a base permanece classificada como **texto digital de estudo, sujeito a erratas**, mesmo estando integrada.

## Uso e atribuição

Atribuir claramente: "Bíblia Católica — Pe. Manuel de Matos Soares, corpus digital do projeto bibliacatolica/biblia (CC0 1.0)". Não usar "Bíblia de Jerusalém", "tradução CNBB" nem "Pe. Antônio Pereira de Figueiredo" como nome do texto realmente exibido.

A tradução da Vulgata mantém particularidades de grafia e numeração que podem divergir de edições bíblicas modernas. Para dúvidas dogmáticas ou traduções sensíveis, comparar com a Bíblia impressa revisada e os documentos da Igreja.

## Próxima revisão

- Verificar em fontes impressas uma amostra representativa de ambos Testamentos e todos os deuterocanônicos.
- Checar se os links para os capítulos do aplicativo resolvem e se o carregamento offline funciona no Safari do iPhone.
- Se o objetivo continuar sendo a transcrição exata da edição de Figueiredo indicada, **não considerar essa escolha editorial atendida** até disponibilizarmos aquela tradução integral.
