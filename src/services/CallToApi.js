const callToApi = (houseFilter) => {
    return fetch(`http://hp-api.herokuapp.com/api/characters/house/${houseFilter}`)
      .then((response) => response.json())
      .then((data) => {
      
        const cleanData= data.map((character)=>{
          
            return {
                id: character.actor,
                image: character.image,
                name: character.name,
                specie:character.species,
              
            };
     
      });
      console.log(data);
    return cleanData;
    });

  };
  export default callToApi;

 