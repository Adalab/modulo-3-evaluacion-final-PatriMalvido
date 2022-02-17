import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/CallToApi';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Route, Switch } from 'react-router-dom';


import Logo from '../images/Logo.png';



function App() {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState('Gryffindor');
  const [gender,setGender]= useState('');

  useEffect(() => {
    callToApi(houseFilter).then((data) => setCharacters(data));
  }, [houseFilter]);

  //EVENTOS-------------------------------------------

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
   
    
    } else if (data.key === 'house') {
      setHouseFilter(data.value);
    }else if (data.key === 'gender'){
      setGender(data.value)
    }

  };
  const ResetButton = () => {
    setHouseFilter('Gryffindor');
    setNameFilter('');

  };


  // RENDER----------------------------------------------

  const filteredCharacters = characters
  .filter((character) => {
    return character.name
      .toLocaleLowerCase()
      .includes(nameFilter.toLocaleLowerCase());
  })
   .filter ((character)=>{
     return character.gender === '' ? true : character.gender===gender;

  });

  const renderCharacterDetail = (props) => {
    const routeId = parseInt(props.match.params.id);

    const findCharacter = characters.find((character) => character.id === routeId);

    return <CharacterDetail character={findCharacter} />;

  }


  return (
    <div>
      <header className='header'>
        <img className='header__img' src={Logo} alt="Logo de Harry Potter" title='Logo de Harry Potter' />
      </header>
      <main>
       
        <Switch>
          <Route path="/" exact>
            <Filters 
            handleFilter={handleFilter}
            resetButton={ResetButton}
            nameFilter={nameFilter}
            nameHouse={houseFilter}
            gender={gender}
          />

            <CharacterList characters={filteredCharacters} />

            <footer className='footer'>
              <p className='footer__text'>Patri Malvido</p>
            </footer>
          </Route>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
