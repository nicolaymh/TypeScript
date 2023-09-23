"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const myName = fullName("Nicolay", "Moreno", "Herrera");
    console.log({ myName });
})();
