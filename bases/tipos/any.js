"use strict";
(() => {
    let avenger = 123;
    let exists;
    let power;
    // Forma de castear 1:
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    // Forma de casteo 2
    avenger = 150.232323;
    console.log(avenger.toFixed(2));
    //? El casteo es propio de TypeScript
    console.log(exists);
    console.log(power);
})();
