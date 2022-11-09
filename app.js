import Base from "./models/Base.js";
import ListaCircular from "./models/ListaCircular.js";

const ruta = new ListaCircular();
let b = new Base("1", "1");
ruta.agregar(b);
b = new Base("2", "1");
ruta.agregar(b);
b = new Base("3", "1");
ruta.agregar(b);
b = new Base("4", "1");
ruta.agregar(b);
console.log(ruta.listar());
console.log(ruta.eliminar("1"));
console.log(ruta.listar());