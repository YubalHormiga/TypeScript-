"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Yubal', 'Hormiga', 'Perez');
    console.log(superman);
})();
