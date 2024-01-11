(() => {
    type Hero = {
        name: String,
        age?: Number,
        powers: string[],
        getName?: () => String
    }

    let myCustomVarible: (string | number | Hero) = 'Yubal'
    console.log(typeof myCustomVarible)

    myCustomVarible = 20
    console.log(typeof myCustomVarible)

    myCustomVarible = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }
    console.log(typeof myCustomVarible)
})()