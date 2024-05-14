export async function getData(api){
    try {
    const response = await fetch(`${api}`);
    const data = await response.json();

    const pokemon = {
        id: data.id,
        name: data.name,
        type0: data.types[0].type.name,
        type1: data.types[1] ? data.types[1].type.name : '',
        ability0: data.abilities[0].ability.name,
        ability1: data.abilities[1] ? data.abilities[1].ability.name : '',
        sprite: data.sprites.front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        weight: parseInt(data.weight) * 0.1,
        height: parseInt(data.height) * 0.1
    };

    return pokemon;
    
} catch (error) {
    console.error('Erro ao obter os dados do Pokémon:', error);
    throw error;
}
}
