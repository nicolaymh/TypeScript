"use strict";
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
