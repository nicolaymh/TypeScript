"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "------"}`;
    };
    const myName = fullName("Nicolay");
    console.log(myName);
})();
