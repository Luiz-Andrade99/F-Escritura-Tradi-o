/* Verificação estrutural da Bíblia Católica incorporada. Execute: node tests/verificar-biblia.mjs */
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
let books=0,chapters=0,verses=0;
const expected={books:73,chapters:1334,verses:35816};
const names=[];
for(let part=1;part<=10;part++){
  const filepath=path.join(root,'biblia-dados','parte-'+String(part).padStart(2,'0')+'.json');
  const data=JSON.parse(fs.readFileSync(filepath,'utf8'));
  if(data.part!==part||data.translation!=='Pe. Manuel de Matos Soares'||!Array.isArray(data.books)){
    throw new Error('Pacote inválido: '+filepath);
  }
  for(const book of data.books){
    books++;
    if(!book.name||!book.chapters||typeof book.chapters!=='object')throw new Error('Livro inválido na parte '+part);
    names.push(book.name);
    for(const [number,rows] of Object.entries(book.chapters)){
      if(!Number.isInteger(+number)||(+number)<1||!Array.isArray(rows)||rows.length===0)throw new Error('Capítulo inválido: '+book.name+' '+number);
      chapters++;
      for(const verse of rows){
        if(!Number.isInteger(verse.v)||verse.v<1||typeof verse.t!=='string'||!verse.t.trim())throw new Error('Versículo inválido em '+book.name+' '+number);
        verses++;
      }
    }
  }
}
if(books!==expected.books||chapters!==expected.chapters||verses!==expected.verses)throw new Error('Contagem inesperada: '+JSON.stringify({books,chapters,verses}));
if(new Set(names).size!==73)throw new Error('Há livros repetidos.');
console.log('OK: '+books+' livros, '+chapters+' capítulos e '+verses+' versículos não vazios.');
console.log('A validação estrutural NÃO substitui a revisão textual contra a edição impressa.');
