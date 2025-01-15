"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Módulos
var constantes_1 = require("./constantes");
function calcularAreaCirculo(radio) {
    return constantes_1.PI * radio * radio;
}
var radio = 5;
var area = calcularAreaCirculo(radio);
console.log("El \u00E1rea de un c\u00EDrculo con radio ".concat(radio, " es: ").concat(area));
