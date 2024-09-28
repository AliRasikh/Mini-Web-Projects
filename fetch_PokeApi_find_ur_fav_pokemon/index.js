const fetchBtn = document.getElementById("fetch--btn");
let pokemonName = document.getElementById("pokemon--name");

fetchBtn.addEventListener("click", () => {
  const pokemon = pokemonName.value;
  console.log(pokemon);
  try {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const img = document.createElement("img");
        img.src = data.sprites.front_default;
        test.appendChild(img);
      })
      .catch((error) => {
        console.error("Error fetching the Pokémon data:", error);
      });
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
});
