"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    // myFunction = 10
    // console.log(myFunction)
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    // myFunction = greet
    // console.log(myFunction('Yubal'))
    // myFunction = saveTheWorld
    // console.log(myFunction())
})();
