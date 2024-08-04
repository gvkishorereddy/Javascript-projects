const pokemonNameInput = document.getElementById("pokemonName");
const pokemonImage = document.getElementById("pokemonImage");

function getPokemon() {
  const pokemonName = pokemonNameInput.value.toLowerCase(); // Ensure lowercase for case-insensitive search

  if (!pokemonName) {
    alert("Please enter a Pokemon name.");
    return; // Prevent unnecessary fetch if no name is entered
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
      if (!response.ok) { // Check for non-200 status codes
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      pokemonImage.src = data.sprites.front_default;
    })
    .catch(error => {
      console.error("Error:", error);
      alert("An error occurred while fetching the Pokemon. Please try again."); // Inform user
    });
}

function sum(a,b)
{
 console.log(a+b);
}
function calculator(a,b,sum)
{
  sum(a,b);
}
calculator(2,3,sum);
