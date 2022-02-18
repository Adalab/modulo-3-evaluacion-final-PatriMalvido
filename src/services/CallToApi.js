const callToApi = (houseFilter) => {
  return fetch(
    `http://hp-api.herokuapp.com/api/characters/house/${houseFilter}`
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character, index) => {
        return {
           // id: character.actor + character.name,
          id: index,
          image: character.image,
          name: character.name,
          specie: character.species,
          alive: character.alive,
          gender: character.gender,
          house: character.house,
        

        };
      });
console.log(data);
      return cleanData;
    });
};
export default callToApi