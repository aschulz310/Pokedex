let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Venusaur', height: 2, types: ['grass' , 'poison']},
    {name: 'Butterfree', height: 1.1, types: ['bug' , 'flying']},
    {name: 'Zubat', height: 0.8, types: ['poison' , 'flying']}
    ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };

})();

// for (let i=0; i < pokemonList.length; i++) {
//   //Writes Pokemon name to the DOM
//   document.write(pokemonList[i].name + " (height :" + pokemonList[i].height + ")");
// //Checks if pokemon height is greater than 1.6 m
//   if (pokemonList[i].height > 1.6) {
//     //if pokemon height is greater than 1.6 m, writes "Wow that's big!"
//     document.write(" - Wow, that's big!");
//   }
//   //Adds line breaks after each pokemon name
//   document.write("<br><br>");
// }


pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + " " + "(height : " + pokemon.height + ")<br><br>");
});
