"use strict";
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    !!bumblebee.disparar ? bumblebee.disparar() : console.log("Function does not esxist");
    const villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    console.log(apocalipsis);
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        const fullName = upper
            ? `${firstName} ${lastName || "------"}`.toUpperCase()
            : `${firstName} ${lastName || "------"}`;
        return fullName;
    };
    const myName = fullName("Nicolay", "Moreno", true);
    console.log({ myName });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "------"}`;
    };
    const myName = fullName("Nicolay");
    console.log(myName);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const myName = fullName("Nicolay", "Moreno");
    console.log(myName);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const myName = fullName("Nicolay", "Moreno", "Herrera");
    console.log({ myName });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = "flash";
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return "Batiseñal activada";
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: "Barry Alen",
        age: 24,
        powers: ["Super vellocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Ken",
        age: 60,
        powers: ["Super vellocidad"],
    };
    console.log(!!flash.getName ? flash.getName() : "No existe la funcion");
    console.log(superman);
    console.log(flash);
})();
(() => {
    let flash = {
        name: "Barry Alen",
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: "Clark Ken",
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = { name: "Bruce", age: 43, powers: [1] };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.232323;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers);
    const villians = ["Omega Rojo", "Dormammu", "Duende Verde"];
    villians.forEach((v) => console.log(v.toUpperCase()));
    numbers.forEach((v) => console.log(v));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isSuperman });
    console.log({ isBatman });
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["mmedium"] = 1] = "mmedium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("Auxilio");
    console.log("Hola mundo");
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers;
    console.log(avengers);
    const villians = 20;
    console.log(villians);
})();
(() => {
    var _a;
    const batman = "Batman";
    const linternaVerde = "Linterna Verde";
    const volcanNegro = "Herow: Volcan Negro";
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta presente");
})();
(() => {
    const hero = ["Dr Strange", 100, true];
    hero[0] = "Ironman";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function call1() {
        return;
    }
    const call2 = () => {
        return;
    };
    const a = call1();
    console.log(a);
    const b = call2();
    console.log(b);
})();
//# sourceMappingURL=main.js.map