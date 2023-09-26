"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.123123,
    };
    const prinAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    const avengersArr = ["Cap. America", true, 123];
    const [capitan, ironman, seriaUnNumero] = avengersArr;
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit",
    };
    const captainAmerica = {
        name: "Capitan America",
        weapon: "Escudo",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [ironman, thor, captainAmerica];
})();
(() => {
    const nombre = "Nicolay";
    const getName = () => { };
})();
//# sourceMappingURL=main.js.map