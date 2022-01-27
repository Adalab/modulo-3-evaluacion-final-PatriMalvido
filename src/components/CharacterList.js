import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const characterElements = props.characters.map((character,index) => {
    return (
      <li key={index} className="card">

        <CharacterCard  character={character} />
      </li>
    );
  });
  return (
    <section className="section_cards">
      <ul className="cards">{characterElements}</ul>
    </section>
  );
};
export default CharacterList;





