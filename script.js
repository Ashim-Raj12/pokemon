const pokemonContainer = document.querySelector(".pokemon-container");

const div = document.createElement("div");
div.classList.add("image-container");

const pokemonImage = document.createElement("img");

const paragraph = document.createElement("p");

for (let i = 1; i <= 910; i++) {
  const pokemonImageClone = pokemonImage.cloneNode();
  pokemonImageClone.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`;

  const paragraphClone = paragraph.cloneNode();
  paragraphClone.innerText = i;

  const divClone = div.cloneNode(true);
  divClone.append(pokemonImageClone, paragraphClone);

  pokemonContainer.append(divClone);
}
