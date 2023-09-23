"use strict";
(() => {
    //* El never no tiene un punto alcanzable, es decir que ahi tiene que morit la ejecucion del codigo. O en este caso puede regresar un numero.
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("Auxilio");
    // Ya no se ejecuta
    console.log("Hola mundo");
})();
