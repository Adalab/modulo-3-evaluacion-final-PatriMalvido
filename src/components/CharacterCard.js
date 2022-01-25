const CharacterCard =(props)=> {


return (

    <>
    <img
    className='card__img'
    src={props.character.image}
    alt={`Foto de ${props.character.name}`}
    title={`Foto de ${props.character.name}`}
    />
    <h4 className='card__title'>Nombre:{props.character.name}</h4>
    <p className="card__description">Especie:{props.character.specie}</p>
    </>

)

}
export default CharacterCard;