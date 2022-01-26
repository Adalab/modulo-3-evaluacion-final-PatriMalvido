import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {


  const getSpecies = () => {
    if (props.character.specie === 'human') {
      return 'Humano';
    } else if (props.character.specie === 'ghost') {
      return 'Fantasma';
    } else if (props.character.specie === 'werewolf') {
      return 'Hombre lobo';
    } else if (props.character.specie === 'half-giant') {
      return 'Medio gigante';
    } else if (props.character.specie === 'goblin') {
      return 'Duende';
    } else if (props.character.specie === 'owl') {
      return 'Búho';
    } else if (props.character.specie === 'house-elf') {
      return 'Elfo doméstico';
    }
  };

  const getStatus = () => {
    // if (props.character.alive && props.character.gender === 'female') {
    //   return 'Viva';
    // } else if (props.character.alive && props.character.gender === 'male') {
    //   return 'Vivo';
    // } else if (!props.character.alive && props.character.gender === 'female') {
    //   return 'Muerta';
    // } else if (!props.character.alive && props.character.gender === 'male') {
    //   return 'Muerto';
    // }
    if (props.character.alive === true ){
        return 'Vivo';
    }else {
        return 'Muerto'
    }

  };

  const getHouse =()=>{
    if (props.character.house === 'Gryffindor') {
        return 'Gryffindor';
      } else if (props.character.house === 'Hufflepuff') {
        return 'Hufflepuff';
      } else if (props.character.house === 'Ravenclaw') {
        return 'Ravenclaw';
      } else if (props.character.house === 'Slytherin') {
        return 'Slytherin';
      }
  };
  
  const getGender = () => {
    return props.character.gender === 'female' ? 'Mujer' : 'Hombre';
  };


  if (props.character === undefined) {
    return (
      <>
        <header className="modal__header">
          <h2 className="modal__title">
            Usuario no encontrado <i class="fa-solid fa-circle-xmark"></i>
          </h2>
          <Link to="/">
              Volver al listado
            <span className="modal__close icon fas fa-times"></span>
          </Link>
        </header>
        <section>
          <p>Prueba a buscar otro personaje </p>
        </section>
      </>
    );
  } else {
    return (
      <>
       <div className='modal__container'>
        <header className="modal__header">
          <h2>titulo</h2>
          <Link to="/">
            Volver al listado
            <span className="modal__close icon fas fa-times"></span>
          </Link>
        </header>
       
        <section className='modal__card'>
          <img
            className="card__img"
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
          <ul className="modal__card-text">
            <li key={props.character.id}>{props.character.name}</li>
            <li>Estatus: {getStatus()}</li>
            <li>Especie: {getSpecies()}</li>
            <li>Género: {getGender()}</li>
            <li>Casa: {getHouse()}</li>
          </ul>
         
        </section>
        </div>
      </>
    );
  }
};
export default CharacterDetail;
