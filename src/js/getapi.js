const api = 'https://pokeapi.co/api/v2/pokemon';

fetch(`${api}/1`)
.then(response => {
    return response.json();
})
.then(data => {
    const pokemon ={
        id: data.id,
        name: data.name,
        type0: data.types[0].type.name,
        type1: data.types[1].type.name,
        ability0: data.abilities[0].ability.name,
        ability1: data.abilities[1].ability.name,
        sprite: data.sprites.front_default,
    }


})
