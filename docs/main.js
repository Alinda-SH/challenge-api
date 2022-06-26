function searchChar(name) {
  console.log(name);
  fetch(`https://genshin-app-api.herokuapp.com/api/characters/info/${name}?infoDataSize=minimal`)
    .then(res => res.json())
    .then(res => {
      console.log(res);

      document.getElementById("charName").innerHTML = `Naam = ${res.payload.character.name}`;
      document.getElementById("description").innerHTML = res.payload.character.description;
      document.getElementById("nation").innerHTML = `Land = ${res.payload.character.nation}`;
      document.getElementById("element").innerHTML = `Element = ${res.payload.character.element}`;
      document.getElementById("weapon").innerHTML = `Wapen = ${res.payload.character.weaponType}`;
      document.getElementById("birthday").innerHTML = `Verjaardag = ${res.payload.character.birthday}`;
      document.getElementById("image").setAttribute("src", res.payload.character.cardImageURL);

    });
}





