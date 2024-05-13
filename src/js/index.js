import { getPokemon } from './getapi.js';

const api = 'https://pokeapi.co/api/v2/pokemon';


getPokemon(api)
  .then(pokemon => {
    console.log(pokemon.id); 
    console.log(pokemon.name); 
    console.log(pokemon.type0); 
    console.log(pokemon.type1); 
    console.log(pokemon.ability0);
    console.log(pokemon.ability1);
    console.log(pokemon.sprite); 
    console.log(pokemon.hp); 
    console.log(pokemon.atack); 
    console.log(pokemon.defense); 
    console.log(pokemon.speed); 


  })
  .catch(error => {
    console.error('Erro ao obter os dados do Pokémon:', error);
});