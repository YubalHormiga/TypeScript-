(() => {
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activaBatsignal = (): string => {
        return 'Batiseñar activada!';
    }
    console.log(typeof activaBatsignal)

    const heroName = returnName()

})()