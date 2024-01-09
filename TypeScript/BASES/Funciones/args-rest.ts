(() => {

    const fullName = (firstName: string, ...restArgs: string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`
    }
    const superman = fullName('Yubal', 'Hormiga', 'Perez')
    console.log(superman)
})()