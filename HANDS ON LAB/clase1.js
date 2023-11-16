class Contador {
    constructor(nombre){
        this.nombre = nombre;
        this.localCount = 0;
    }
    static globalCount = 0;

    getResponsable(){
        return this.nombre;
    }
    
    contar(){
        this.localCount++;
        Contador.globalCount++;
    }

    getCuentaIndividual(){
        return this.localCount;
    }

    getCuentaGlobal(){
        return this.globalCount;
    }
}

const contador1 = new Contador('abril');
const contador2 = new Contador('kiti');
const contador3 = new Contador('marcus')

console.log(`Este contador es de ${contador1.getResponsable()}`);
console.log(`Este contador es de ${contador2.getResponsable()}`);
console.log(`Este contador es de ${contador3.getResponsable()}`);



contador1.contar();
contador1.contar();
contador1.contar();

console.log(`el contador 1 obtuvo: ${contador1.getCuentaIndividual()}`);


contador2.contar();
contador2.contar();
console.log(`el contador 1 obtuvo: ${contador1.getCuentaIndividual()}`);

contador3.conconsole.log(`el contador 1 obtuvo: ${contador1.getCuentaIndividual()}`);

console.log(Contador.globalCount)