class ListaCircular {
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

  actual() {
    return this.primero;
  }
  cambiarActual() {
    this.primero = this.primero.sig;
  }
  extraerActual() {
    let aux = this.primero;
    if (this.primero == null)
      return null;
    else if (this.primero.sig == this.primero)
      this.primero = null;
    else {
      this.primero.ant.sig = aux.sig;
      this.primero.sig.ant = aux.ant;
      this.primero = aux.sig;
    }
    return aux;
  }
  listar() {
    let res = "";
    let temp = this.primero;
    if (!this.primero) return;
    do {
      res += `nom: ${temp.nombre}, min: ${temp.minutos}\n`;
      temp = temp.sig;
    } while (temp != this.primero)
    return res;
  }
}

export default ListaCircular;