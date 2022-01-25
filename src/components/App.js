import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/CallToApi';
import Filters from './Filters';
import CharacterList from './CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState('gryffindor');

  useEffect(() => {
    callToApi(houseFilter).then((data) => setCharacters(data));
  }, [houseFilter]);

  //EVENTOS-------------------------------------------

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'house') {
      setHouseFilter(data.value);
    }
  };

  // RENDER----------------------------------------------

  const filteredCharacters = characters
    .filter((character) => {
      return character.name
        .toLocaleLowerCase()
        .includes(nameFilter.toLocaleLowerCase());
    });
  

  return (
    <div>
      <main>
        <h1 className="page__title">Harry Potter</h1>

        <Filters handleFilter={handleFilter} />
        {/* <section className="section__form">
          <form className="form">
            <label className="form__label" htmlFor="name">
              Busca por personaje:
            </label>
            <input
              className="form__input-text"
              type="text"
              name="name"
              id="text"
            />
            <label className="form__label" htmlFor="house">
              Seleccciona la casa:
            </label>
            <select className="form__input-text" name="house" id="house">
              <option value="gryffindor">Gryffindor</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="slytherin">Slytherin</option>
            </select>
          </form>
        </section> */}
        <CharacterList characters={filteredCharacters} />
        {/* <section className="section_cards">
          <ul className="cards">
            <li className="card">aqui va la info del personaje</li>
          </ul>
        </section> */}
      </main>
      <footer className="footer">
        <p>texto para el footer</p>
      </footer>
    </div>
  );
}

export default App;
