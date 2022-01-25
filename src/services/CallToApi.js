const callToApi = () => {
    return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data.map((character)=>{
          
            return {
                id: character.name + character.house,
                image: character.image,
                name: character.name,
                specie:character.species,
              
            };
     
   
      });
    
    });
     
  };
  export default callToApi;
  