const api = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemon(api){
    try {
        const response = await fetch(`${api}/1`);
        const data = await response.json();
    
        const pokemon = {
          id: data.id,
          name: data.name,
          type0: data.types[0].type.name,
          type1: data.types[1] ? data.types[1].type.name : '',
          ability0: data.abilities[0].ability.name,
          ability1: data.abilities[1] ? data.abilities[1].ability.name : '',
          sprite: data.sprites.front_default,
          weight: data.weight,
          hp: data.stats[0].base_stat,
          atack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
        };
    
        return pokemon;

    } catch (error) {
        console.error('Erro ao obter os dados do Pokémon:', error);
        throw error;
    }
}
