(() => {

    interface Client {
        name: String,
        age?: Number
        address: Address
        getFullAddress(id: String): String
    }

    interface Address {
        id: Number,
        zip: String,
        city: String
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 123,
            zip: 'KLD YU',
            city: 'Fuerteventura'
        },
        getFullAddress(id:String){
            return this.address.city
        }
    }
    console.log(client)
})()