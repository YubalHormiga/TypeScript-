(() => {

    let flash: { name: String, age?: Number, powers: string[], getName?: () => String } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']

    }


    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name
        }
    }

    if (flash && flash.getName) {
        console.log(flash.getName());
    }

})()