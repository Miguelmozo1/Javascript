const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


// problem 1
const divBy3 = pokemon.filter(index => index.id %3 === 0);
// console.log(divBy3)

// problem 2
const fireType = pokemon.filter(index => index.types == "fire")
// console.log(fireType)

// problem 3
const moreThanOneType = pokemon.filter(index => index.types.length > 1)
// console.log(moreThanOneType)

// problem 4
const justTheNames = pokemon.map(index => index.name)
// console.log(justTheNames)

// problem 5
const namesWithId99Plus = pokemon.filter(index => index.id > 99).map(index => index.name)
// console.log(namesWithId99Plus)

//problem 6
const namesOfPoisons = pokemon.filter(index => index.types == "poison").map(index => index.name)
// console.log(namesOfPoisons)

// problem 7
const firstFromSecond = pokemon.filter(index => index.types[1] == "flying").map(index => index.types[0])
// console.log(firstFromSecond)

// problem 8
const howManyNormals = pokemon.filter(index => index.types[0] == "normal").length
// console.log(howManyNormals)

// problem 9
const allBut148 = pokemon.filter(index => index.id != 148)
// console.log(allBut148)

// problem 10
const allBut35IsFairy = pokemon.filter(index => index.id != 35 ? index : index.types = "fairy")
const meth2 = pokemon.filter(index => index.id == 35? index.types = "fairy": index)
// console.log(meth2)
// console.log(allBut35IsFairy)