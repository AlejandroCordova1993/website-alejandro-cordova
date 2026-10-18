import {readFile,writeFile,readdir,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';

// Publication URLs carry one revision throughout the module graph and materials.
// The browser's storage origin and notebook keys remain unchanged.
if(!process.argv[2]||!process.argv[3])throw Error('Usar sync-main-website.mjs DIST_DEL_CURSO RAIZ_DE_LA_WEB');
const source=path.resolve(process.argv[2]);
const site=path.resolve(process.argv[3]);
await readFile(path.join(source,'class-flow.js')); 
async function files(root,prefix=''){
 const result=[];
 for(const entry of await readdir(path.join(root,prefix),{withFileTypes:true})){
  const rel=path.join(prefix,entry.name);
  if(entry.isDirectory())result.push(...await files(root,rel));
  else if(entry.isFile())result.push(rel);
 }
 return result.sort();
}
const paths=await files(source),contents=new Map();const digest=createHash('sha256');
for(const rel of paths){const data=await readFile(path.join(source,rel));contents.set(rel,data);digest.update(rel.replaceAll('\\','/')+'\0');digest.update(data);}
const revision='lc-'+digest.digest('hex').slice(0,12);
function versionUrls(text){
 return text.replace(/(['"])(\.{1,2}\/[^'"\s?#]+\.(?:js|css|html|pdf))(#[^'"]*)?\1/g,(_,quote,url,fragment='')=>quote+url+'?v='+revision+fragment+quote)
  .replace(/href="\.\.\/#([^"\s]*)"/g,(_,fragment)=>'href="../index.html?v='+revision+'#'+fragment+'"');
}
for(const relative of ['recursos/literatura-comparada','public/recursos/literatura-comparada']){
 const target=path.resolve(site,relative);
 if(!target.startsWith(site+path.sep))throw Error('La ruta no pertenece al sitio');
 for(const [rel,data] of contents){const out=path.join(target,rel);await mkdir(path.dirname(out),{recursive:true});await writeFile(out,/\.(?:js|css|html)$/.test(rel)?versionUrls(data.toString('utf8')):data);}
 await writeFile(path.join(target,'release.json'),JSON.stringify({revision,source_files:paths.length},null,2)+'\n');
}
for(const catalog of ['recursos.html','proyectos.html']){
 const filename=path.join(site,catalog);let text=await readFile(filename,'utf8');
 const pattern=/(href=["']\.\/recursos\/literatura-comparada\/index\.html)(?:\?v=[^"']+)?(["'])/g;
 if(!pattern.test(text))throw Error('Falta la ficha de Literatura comparada en '+catalog);
 pattern.lastIndex=0;text=text.replace(pattern,'$1?v='+revision+'$2');await writeFile(filename,text);
}
console.log(JSON.stringify({revision,source,site,files:paths.length}));
