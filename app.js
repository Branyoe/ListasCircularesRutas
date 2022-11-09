import Base from "./models/Base.js";
import Ruta from "./models/ListaCircular.js";

const ruta = new Ruta();
let b = new Base("1", 0);
ruta.agregar(b);
b = new Base("2", 15);
ruta.agregar(b);
b = new Base("3", 30);
ruta.agregar(b);
b = new Base("4", 45);
ruta.agregar(b);
console.log(ruta.imprimir());
console.log(ruta.recorrido("1", 2, 10, 4, 30));