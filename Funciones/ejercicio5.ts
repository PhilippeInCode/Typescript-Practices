/*
 * La siguiente función contendrá parámetros obligatorios, opcionales y otros
 * serán por defecto si no le pasamos ninguno.
 *
 * Deberás adaptarlos de la siguiente forma:
 * nombre → obligatorio
 * edad → opcional
 * arma → por defecto u omisión será "pistola"
 */
/*

function getVillano( nombre, edad, arma ) {
  let mensaje;
  if( edad ) {
    mensaje = nombre + " tiene una edad de: " + edad + " y arma: " + arma;
  } else {
    mensaje = nombre + " tiene un " + edad
  }
};

*/


function getVillano(nombre: string, edad?: number, arma: string = "pistola"): string {
    let mensaje: string;
    if (edad) {
        mensaje = nombre + " tiene una edad de: " + edad + " y arma: " + arma;
    } else {
        mensaje = nombre + " tiene un " + edad;
    }
    return mensaje;
}

console.log(getVillano("Joker", 35, "cuchillo")); // Joker tiene una edad de: 35 y arma: cuchillo
console.log(getVillano("Penguin", 45)); // Penguin tiene una edad de: 45 y arma: pistola
console.log(getVillano("Two Face")); // Two Face tiene un undefined
