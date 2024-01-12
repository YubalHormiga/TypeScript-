//!Tema 11

import { getPokemon } from './generics/get-pokemon';




getPokemon(4)
    .then( pokemon => console.log( pokemon.abilities[0].ability.url ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('Fin de getPokemon')  )
//!Fin tema 11

//?Tema

// import { Pokemon } from './decorators/pokemon-class';



// const charmander = new Pokemon('Charmander');

// // (Pokemon.prototype as any).customName = 'Pikachu'

// // console.log(charmander.savePokemonToDB(50));
// // charmander.savePokemonToDB(10);
// charmander.publicApi = 'https://fernando-herrera.com';
// console.log( charmander )


