"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activaBatsignal = () => {
        return 'Batiseñar activada!';
    };
    console.log(typeof activaBatsignal);
    const heroName = returnName();
})();
