//Button
const BtnCursedClick = document.getElementById("Cursed-Click");
const BtnCursedUpgrad = document.getElementById("Cursed-Upgrad");
const BtnCursedAuto = document.getElementById("Cursed-Auto");
const CursedShowPet = document.getElementById("Cursed-Pet");

//Text
const TextCursedEnergy = document.getElementById("Cursed-Energy");

let cursedEnergy = 0;

let multiplier = 1;
let multipliercost = 30;

let autoCursed = 0;
let autoCursedcost = 100;

function cursedClick() {
  TextCursedEnergy.innerHTML = `You Have ${Math.floor(cursedEnergy)} Cursed Energy`;
  //   console.log(multiplier);
}

BtnCursedClick.addEventListener("click", function () {
  cursedEnergy += multiplier;
  // console.log(cursedEnergy);
  cursedClick();
});

BtnCursedUpgrad.addEventListener("click", function () {
  if (cursedEnergy >= multipliercost) {
    cursedEnergy -= multipliercost;

    cursedClick();

    multiplier *= 1.5;

    multipliercost = Math.floor(multipliercost * 1.5);

    BtnCursedUpgrad.innerText = `Upgard Click ${multipliercost} CursedEnergy`;
  } else {
    alert(`You don't have Cursed Energy`);
  }
});

setInterval(function () {
  cursedEnergy += autoCursed * 1.5;

  cursedClick();
}, 1000);

BtnCursedAuto.addEventListener("click", function () {
  if (cursedEnergy >= autoCursedcost) {
    cursedEnergy -= autoCursedcost;

    autoCursed++;
    autoCursedcost *= 1.5;

    cursedClick();

    BtnCursedAuto.innerText = `Buy CursedEnergy Pet ${Math.floor(autoCursedcost)}`;
    CursedShowPet.innerText = `Your Pet Farm Energy ${autoCursed * 1.5} Sec`;
  } else {
    alert(`You don't have Cursed Energy`);
  }
});
