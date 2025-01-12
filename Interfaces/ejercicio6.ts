/*
 * Dado el código siguiente, tendremos que crear una interfaz que sirva
 * después para validar el objeto.
 */

/*
let camaleon = {
  tipo: "reptil",
  peculiaridad: "camuflarse"
}
*/

interface Camaleon {
  tipo: string;
  peculiaridad: string;
}

let camaleon: Camaleon = {
  tipo: "reptil",
  peculiaridad: "camuflarse"
}

console.log(camaleon); // { tipo: 'reptil', peculiaridad: 'camuflarse' }
