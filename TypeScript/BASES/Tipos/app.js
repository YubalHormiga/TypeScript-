"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let power;
    (function (power) {
        power[power["acuaman"] = 0] = "acuaman";
        power[power["batman"] = 1] = "batman";
        power[power["flash"] = 5] = "flash";
        power[power["superman"] = 100] = "superman";
    })(power || (power = {}));
    const fuerzaFlash = power.acuaman;
    const fuerzaSuperman = power.superman;
    const fuerzaBatman = power.batman;
    const fuerzaAcuaman = power.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
