"use strict";
(() => {
    // Metodos dentro de los objetos
    let flash = {
        name: "Barry Alen",
        age: 24,
        powers: ["Super vellocidad", "Viajar en el tiempo"],
        // getName() {
        //    return this.name;
        // },
    };
    let superman = {
        name: "Clark Ken",
        age: 60,
        powers: ["Super vellocidad"],
    };
    console.log(!!flash.getName ? flash.getName() : "No existe la funcion");
    console.log(superman);
})();
