"use strict";
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
