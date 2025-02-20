const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
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
// divisible por 3
    const idDivisiblePor3 = pokemon.filter(p => p.id % 3 === 0);
console.log(idDivisiblePor3);

// fuego
const tipoFuego = pokemon.filter(p => p.types.includes("fire"));
console.log(tipoFuego);

// mas de un tipo
const masDeUnTipo = pokemon.filter(p => p.types.length > 1);
console.log(masDeUnTipo);

// solo nombres
const soloNombres = pokemon.map(p => p.name);
console.log(soloNombres);

// id mayor a 99
const nombresIdMayorQue99 = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log(nombresIdMayorQue99);

// veneno
const nombresUnTipoVeneno = pokemon.filter(p => p.types.length === 1 && p.types[0] === "poison").map(p => p.name);
console.log(nombresUnTipoVeneno);

// segundo tipo es volador
const primerTipoSiSegundoEsVolador = pokemon.filter(p => p.types[1] === "flying").map(p => p.types[0]);
console.log(primerTipoSiSegundoEsVolador);

// normal
const cuentaTipoNormal = pokemon.filter(p => p.types.includes("normal")).length;
console.log(cuentaTipoNormal);
