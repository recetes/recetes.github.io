"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = "./src/assets/data";
var archivo_resultado = "recetas.json";
var recetas = new Array();
var files = fs.readdirSync(path);
files = files.filter(function (x) { return x != archivo_resultado; });
for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
    var file = files_1[_i];
    var data = fs.readFileSync(path + "/" + file, "utf8");
    var objeto = JSON.parse(data);
    recetas.push(objeto);
}
fs.writeFileSync(path + "/" + archivo_resultado, JSON.stringify(recetas));
