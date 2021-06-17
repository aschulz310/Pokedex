let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Venusaur', height: 2, types: ['grass' , 'poison']},
    {name: 'Butterfree', height: 1.1, types: ['bug' , 'flying']},
    {name: 'Zubat', height: 0.8, types: ['poison' , 'flying']}
    ];

    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let fullList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    fullList.appendChild(listpokemon);
    button.addEventListener('click', function (event) {
        showDetails(pokemon);
    });
  }

  function showDetails(pokemon){
    console.log(pokemon.name);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
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
  pokemonRepository.addListItem(pokemon);
});
