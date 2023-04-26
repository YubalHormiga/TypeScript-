(()=>{

    const batman:string = 'Batman';
    const LinternaVerde:string = "LinternaVerde";
    const volcanNegro:string = `Heroe Volca Negro`;

    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || 'No está presente')
})()