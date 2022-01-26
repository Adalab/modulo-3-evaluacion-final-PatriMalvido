import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {

    const getGender =()=>{
        return props.character.gender === 'female' ? 'Mujer': 'Hombre'
    };

  if (props.character === undefined) {
    return (
      <>
        <header className="modal__header">
          <h2 className="modal__title">
            Usuario no encontrado <i class="fa-solid fa-circle-xmark"></i>
          </h2>
          <Link to="/">
            <span className="modal__close icon fas fa-times"></span>
          </Link>
        </header>
        <section>
          <p>Búscate la vida</p>
        </section>
      </>
    );
  } else {
    return (
      <>
        <header className="modal__header">
          <h2>titulo</h2>
          <Link to="/">
            Volver al listado
            <span className="modal__close icon fas fa-times"></span>
          </Link>
        </header>
        <section>
          <img
            className="card__img"
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
          <ul className="">
            <li key={props.character.id}>{props.character.name}</li>
            <li>Estatus:{props.character.alive}</li>
            <li>Especie:{props.character.species}</li>
            <li>Género:{getGender()}</li>
            <li>Casa:{props.character.house}</li>
          </ul>
        </section>
      </>
    );
  }
};
export default CharacterDetail;
