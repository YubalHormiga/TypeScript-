(() => {
    const fullName = (firtsName: string, lastName?: string, upper:boolean = false ): string => {
        if(upper){
            return `${firtsName} ${lastName || '-----'}`.toUpperCase()
        }else{
            return `${firtsName} ${lastName || '-----'}`

        }

    }
    const name = fullName('Pedro','Hormiga',true)
    console.log(name)
})()