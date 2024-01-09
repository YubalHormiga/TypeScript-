"use strict";
(() => {
    const fullName = (firtsName, lastName, upper = false) => {
        if (upper) {
            return `${firtsName} ${lastName || '-----'}`.toUpperCase();
        }
        else {
            return `${firtsName} ${lastName || '-----'}`;
        }
    };
    const name = fullName('Pedro', 'Hormiga', true);
    console.log(name);
})();
