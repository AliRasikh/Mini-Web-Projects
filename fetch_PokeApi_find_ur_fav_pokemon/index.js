const fetchBtn = document.getElementById("fetch--btn");
let pokemonName = document.getElementById("pokemon--name");
const pokemonImg = document.getElementById("pokemon--img--container");
const pokemonData = document.getElementById("pokemon--data--container");

fetchBtn.addEventListener("click", () => {
  const pokemon = pokemonName.value;
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
        pokemonImg.innerHTML = "";
        pokemonImg.appendChild(img);
        const name = document.createElement("h3");
        name.textContent = data.name;
        const height = document.createElement("p");
        height.textContent = `Height: ${data.height}`;
        const weight = document.createElement("p");
        weight.textContent = `Weight: ${data.weight}`;
        const abilities = document.createElement("p");
        abilities.textContent = `Abilities: ${data.abilities
          .map((ability) => ability.ability.name)
          .join(", ")}`;
        const types = document.createElement("p");
        types.textContent = `Types: ${data.types
          .map((type) => type.type.name)
          .join(", ")}`;
        const moves = document.createElement("p");
        moves.textContent = `Moves: ${data.moves
          .map((move) => move.move.name)
          .slice(0, 5)
          .join(", ")}`;
        pokemonData.innerHTML = "";
        pokemonData.appendChild(name);
        pokemonData.appendChild(height);
        pokemonData.appendChild(weight);
        pokemonData.appendChild(abilities);
        pokemonData.appendChild(types);
        pokemonData.appendChild(moves);
      })
      .catch((error) => {
        console.error("Error fetching the Pokémon data:", error);
      });
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
});
