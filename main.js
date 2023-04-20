let LISTA=[]
$(function(){
    console.log("betöltődés után", LISTA)
    let vegpont = "adatok.json";
    adatbeolvas(vegpont,LISTA,megjelenit)
    console.log("adatbeolvas() metódus után", LISTA);
    vegpont="https://pokeapi.co/api/v2/pokemon/ditto"
    adatbeolvas(vegpont, pokemon, megjelenit)




});
function adatbeolvas(vegpont,LISTA,callbackFv){
    let file="adatok.json"
    fetch(file)
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data);
        console.log(data.ADATLISTA);
        LISTA=data.ADATLISTA;
        callbackFv(lista)
        megjelenit(LISTA)
        console.log("fetch adatbeolvasás után", LISTA);
    })
    .catch((error)=>console.log(error))
}
function megjenit(lista){
    console.log(lista)
}
function pokemonMegjelenit(adat){
    console.log(adat)
    console.log(adat.sprites.front_default);
    const pokeObj = {
        eleresiUt: adat.sprites.front_default,
        pokemonNev: adat.name,
    };
    const pokemonELEM = $(".pokemon");
    const text = 
}