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
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(age) {
            return this.name + " " + this.realName + " edad: " + age;
        }
    }
    const wolverine = new Mutant(45, "Wolverine", "Logan");
})();
(() => {
    const client = {
        name: "Nicolay",
        age: 36,
        address: {
            id: 125,
            zip: "KYD SUD",
            city: "Bogota",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map