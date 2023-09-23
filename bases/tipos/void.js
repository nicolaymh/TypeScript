"use strict";
(() => {
    function call1() {
        // return undefined;
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
