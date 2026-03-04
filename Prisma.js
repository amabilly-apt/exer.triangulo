class Prisma{
    constructor(base, altura){
    this.base = base
    this.altura = altura
    
}   

    calcularAreaBase(){
        return (this.base * this.altura) / 2
    }

    calcularAreaLateral(){
        return this.base + this.base + this.base
    }
    calcularVolume(){
        return this.calcularAreaBase() * this.altura 
        
    }
}

module.exports = Prisma