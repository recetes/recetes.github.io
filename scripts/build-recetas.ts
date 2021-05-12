import { ComponentFactoryResolver } from '@angular/core';
import * as fs from 'fs';

let path = "./src/assets/data";
let archivo_resultado="recetas.json";
let recetas = new Array<any>();

let files = fs.readdirSync(path);
files = files.filter(x => x!=archivo_resultado);
for (let file of files) {
    let data = fs.readFileSync(`${path}/${file}`, "utf8");
    let objeto = JSON.parse(data);
    recetas.push(objeto);
}
fs.writeFileSync(`${path}/${archivo_resultado}`, JSON.stringify(recetas));