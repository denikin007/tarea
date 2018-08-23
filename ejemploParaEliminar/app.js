var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var mifuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var hulk = {
    nombre: 'bruce',
    smash: function () {
        setTimeout(function () {
            console.log(this.nombre + "smash!");
        }, 1500);
    }
};
var avenger = {
    nombre: "steve",
    clave: "Capitan America",
    poder: "droga"
};
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
//let nombre=avenger.nombre;
//let clave=avenger.clave;
//let poder=avenger.poder;
//estructuracion de un arreglo
var avenge = ["Thor", "Steve", "Tony"];
var thor = avenge[0], capi = avenge[1], ironman = avenge[2];
console.log(thor, capi, ironman);
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promesa ejecutada");
        //termina bien
        resolve();
        //termina mal
        //reject();
    }, 1500);
});
prom1.then(function () {
    console.log("ejecutarme cuando se termine bien");
}, function () {
    console.log("ejecutarme si sale mal");
});
//interfaces
function enviarMision(xmen) {
    console.log("enviando a: " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "regenracion"
};
enviarMision(wolverine);
var Vengador = /** @class */ (function () {
    function Vengador(nombre, equipo) {
        this.nombre = "antman";
        this.nombre = nombre;
        this.equipo = equipo;
    }
    return Vengador;
}());
var antman = new Vengador("denikin", "Vengador");
console.log(antman);
