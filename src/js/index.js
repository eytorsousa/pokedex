import { getData } from './getdata.js';
const api = 'https://pokeapi.co/api/v2/pokemon/';

const search_t = document.querySelector('.search-t');
const search_s = document.querySelector('.search-s');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const nn = document.querySelector('.nn');
const img = document.querySelector('.img');
const type0 = document.querySelector('.type0');
const type1 = document.querySelector('.type1');
const ability0 = document.querySelector('.ability0');
const ability1 = document.querySelector('.ability1');
const hp = document.querySelector('.hp');
const attack = document.querySelector('.attack');
const defense = document.querySelector('.defense');
const speed = document.querySelector('.speed');
const weight = document.querySelector('.weight');
const height = document.querySelector('.height');

function searchPokemon(input){
    getData(input)
    .then(pokemon => {
        nn.innerText = `#${("0000" + pokemon.id).slice(-4)} - ${toUpper(pokemon.name)}`;
        img.src = `${pokemon.sprite}`;
        type0.innerText = `TYPE: ${pokemon.type0}` ;
        pokemon.type1 ? type1.innerText = `// ${pokemon.type1}` : type1.innerText = '';
        ability0.innerText = `Ability: ${pokemon.ability0}`
        pokemon.ability1 ? ability1.innerText = ` Ability 2: ${pokemon.ability1}` : ability1.innerText = '';
        hp.innerText = `HP: ${pokemon.hp}`;
        attack.innerText = `ATACK: ${pokemon.attack}`;
        defense.innerText = `DEFENSE: ${pokemon.defense}`;
        speed.innerText = `SPEED: ${pokemon.speed}`;
        weight.innerText = `WEIGHT: ${pokemon.weight.toFixed(2)} kg`;
        height.innerText = `HEIGHT: ${pokemon.height.toFixed(2)} m`;
    })
    .catch(error => {
        clearAll();
        type0.innerText = 'NOT FOUND!';
        //console.error('Erro ao obter os dados do Pokémon:', error);
    });
}

function main(){
    if(search_t.value){
        searchPokemon(`${api}/${parseInt(search_t.value)}`);
        clearFields();
    }
}

search_t.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        main();
    }
});

search_s.addEventListener('click', main);
next.addEventListener('click', ()=>{nextPrevious('+')});
previous.addEventListener('click', ()=>{nextPrevious('-')});

function nextPrevious(mm){
    clearFields();
    let nextPrevious = eval(`parseInt((nn.innerText).substring(1, 5), 10) ${mm} 1`);
    searchPokemon(`${api}/${nextPrevious}`);
}

function clearFields(){
    search_t.value = '';
    search_t.focus();
}

function clearAll(){
    nn.innerText = ``;
    img.src = ``;
    type0.innerText = `` ;
    type1.innerText = ``;
    ability0.innerText = ``
    ability1.innerText = ``;
    hp.innerText = ``;
    attack.innerText = ``;
    defense.innerText = ``;
    speed.innerText = ``;
    weight.innerText = ``;
    height.innerText = ``;
}

function toUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
