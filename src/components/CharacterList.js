import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return (
      <li key={props.id} className="card">
        
        <CharacterCard key={props.id} character={character} />
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
