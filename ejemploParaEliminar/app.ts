

let miFuncion = function(a){
    return a;
}

let miFuncionF = a => a;

let miFuncion2=function(a,b){
    return a+b;
}

let miFuncion2F=(a,b) => a+b;

let mifuncion3=function(nombre){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F=(nombre)=>{
    nombre=nombre.toUpperCase();
    return nombre;
}

let hulk={
    nombre: 'bruce',
    smash(){
        setTimeout(function(){
            console.log(this.nombre + "smash!");
        },1500 )
        
        
    }
}

let avenger={
    nombre: "steve",
    clave: "Capitan America",
    poder: "droga"
}

let { nombre,clave,poder } = avenger;

//let nombre=avenger.nombre;
//let clave=avenger.clave;
//let poder=avenger.poder;

//estructuracion de un arreglo

let avenge:string[]=["Thor","Steve","Tony"]

let [thor,capi,ironman]=avenge;

console.log(thor,capi,ironman);

let prom1=new Promise(function(resolve,reject){
    setTimeout(() => {

        console.log("promesa ejecutada");
       //termina bien
        resolve();
        //termina mal
    //reject();
       
    }, 1500);
});

prom1.then(function(){
    console.log("ejecutarme cuando se termine bien");
},
function(){
    console.log("ejecutarme si sale mal");
});

//interfaces
function enviarMision( xmen : Xmen ){
    console.log("enviando a: " + xmen.nombre);
}

let wolverine:Xmen={
    nombre:"Wolverine",
    poder:"regenracion"
}

interface Xmen{
    nombre:string,
    poder:string
}

enviarMision(wolverine);

class Vengador{
    nombre:string = "antman";
    equipo:string;
    nombreReal:string;

    puedePelear:boolean;
    peleasGanadas:number;

    constructor(nombre:string,equipo:string){
        this.nombre=nombre;
        this.equipo=equipo;
    }
}

let antman:Vengador=new Vengador("denikin","Vengador");
console.log(antman);