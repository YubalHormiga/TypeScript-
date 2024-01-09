(() => {
    const fullName = (firtsName: string, lastName?: string ): string => {

        return `${firtsName} ${lastName}`

    }
    const name = fullName('Yubal')
    console.log(name)
})()