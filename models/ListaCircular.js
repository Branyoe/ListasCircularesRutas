class Ruta {
  constructor() {
    this.primero = null;
  }
  agregar(nuevo) {
    if (this.primero == null) {
      this.primero = nuevo;
      nuevo.sig = this.primero;
      nuevo.ant = this.primero;
    } else {
      nuevo.sig = this.primero;
      nuevo.ant = this.primero.ant;
      this.primero.ant = nuevo;
      nuevo.ant.sig = nuevo;
    }
  }

  buscar(nombre) {
    if (!this.primero) return
    function ciclo(base, primero) {
      if (base.nombre === nombre) return base;
      if (base.sig === primero) return
      return ciclo(base.sig, primero);
    }
    return ciclo(this.primero, this.primero);
  }

  eliminar(nombre) {
    if (!this.primero) return;

    if (this.primero.nombre === nombre) {
      let aux = this.primero
      this.primero = this.primero.sig;
      this.primero.ant = aux.ant;
      this.primero.ant.sig = this.primero
      return aux;
    }

    function ciclo(base, primero) {
      if (base.sig.nombre === nombre) {
        let aux = base.sig;
        base.sig = base.sig.sig;
        return aux;
      }
      if (base.sig === primero) return;
      return ciclo(base.sig, primero);
    }
    return ciclo(this.primero, this.primero)
  }

  imprimir() {
    let res = "";
    let temp = this.primero;
    if (!this.primero) return;
    do {
      res += `nom: ${temp.nombre}, min: ${temp.minutos}\n`;
      temp = temp.sig;
    } while (temp != this.primero)
    return res;
  }

  recorrido(baseInicio, horaInicio, minutoInicio, horaFin, minutoFin){
    let inicio = this.buscar(baseInicio);
    let res = "";
    let temp = inicio;
    let hora = horaInicio;
    let min = minutoInicio;
    let vuelta = 0;
    
    console.log("\nBase inicio: " + inicio.nombre);
    console.log(`Inicio: ${horaInicio}:${minutoInicio}`);
    console.log(`Fin: ${horaFin}:${minutoFin}\n\n`);
    do {
      res += `base: ${temp.nombre}, ${hora}:${min}\n\n`;
      let dif = temp.sig.minutos - temp.minutos < 0 ? temp.sig.minutos - temp.minutos + 60 : temp.sig.minutos - temp.minutos
      temp = temp.sig;
      min += dif
      if(min > 59){
        hora++;
        min-=60;
      }
    } while (hora != horaFin || min <= minutoFin)
    return res;
  }
}

export default Ruta;