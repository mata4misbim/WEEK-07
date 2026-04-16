// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

const btnFindPoke = document.getElementById("btn-findpoke");
const btnRemovePoke = document.getElementById("btn-removepoke");
const container = document.getElementById("pokemon-container");
const pokeCard = document.getElementById("poke-card");
const btnremoveAllpoke = document.getElementById("btn-removeallpoke");

function findPokemon() {
  //value
  const pokeNameInput = document.getElementById("poke-name");
  const namePoke = pokeNameInput.value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${namePoke}`)
    .then((response) => response.json())
    .then((data) => {
      //ส่วนประกอบ
      const pokediv = document.createElement("div");
      const pokename = document.createElement("h3");
      const pokeImg = document.createElement("img");

      pokediv.id = "poke-card";

      pokename.innerText = data.name;
      pokeImg.src = data.sprites.front_shiny;

      pokediv.appendChild(pokename);
      pokediv.appendChild(pokeImg);

      container.appendChild(pokediv);
    })

    .catch((err) => alert("Your Name Pokemon is wrong!!!", err));
}

function removeLastPokemon() {
  const lastCard = container.lastElementChild;
  //   lastCard.remove();

  if (lastCard) {
    lastCard.remove();
  } else {
    alert("หลอน");
  }
}

function removeAllPokemon() {
  container.innerHTML = "";
  //   const lastCard = container.lastElementChild;
  //   //   lastCard.remove();
  //   if (lastCard) {
  //     lastCard.remove();
  //   } else {
  //     alert("หลอน");
  //   }
}

btnFindPoke.addEventListener("click", findPokemon);
btnRemovePoke.addEventListener("click", removeLastPokemon);
btnremoveAllpoke.addEventListener("click", removeAllPokemon);
