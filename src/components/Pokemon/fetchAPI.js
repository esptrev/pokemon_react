function retrieveFromPokemonAPI(){
    return fetch ("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
        .then(function (res){
            return res.json();
        }).then(function (data){
            console.log(data)
        })
}
retrieveFromPokemonAPI();