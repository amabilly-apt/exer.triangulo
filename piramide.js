class Piramide{
    constructor(base, altura){
    this.base = base
    this.altura = altura
}

    calcularAreaBase(){
      return (this.base * this.altura) / 2

    }

    calcularVolume(){
        return this.calcularAreaBase() * this.altura / 3
    }

    calcularAreaLateral(){
        return this.base * this.altura / 2
    }
}

module.exports = Piramide