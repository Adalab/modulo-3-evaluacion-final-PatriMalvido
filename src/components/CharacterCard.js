const CharacterCard = (props) => {
    
  const defaultImage =
    'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter';

  if (!props.character.image) {
    return (
      <>
        <img
         className="card__img"
          src={defaultImage}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4 className="card__title">Nombre:{props.character.name}</h4>
        <p className="card__description">{props.character.specie}</p>
      </>
    );
  } else {
    return (
      <>
        <img
          className="card__img"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4 className="card__title">Nombre:{props.character.name}</h4>
        <p className="card__description">{props.character.specie}</p>
      </>
    );
  }
};
export default CharacterCard;
