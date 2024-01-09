(() => {
    const addNumbers = (a: number, b: number) => a + b
    const greet = (name: string) => `Hola ${name}`
    const saveTheWorld = () => `El mundo está salvado`

    let myFunction: (x: number, z: number) => number
    // myFunction = 10
    // console.log(myFunction)

    myFunction = addNumbers
    console.log(myFunction(1, 2))

    // myFunction = greet
    // console.log(myFunction('Yubal'))

    // myFunction = saveTheWorld
    // console.log(myFunction())


})()