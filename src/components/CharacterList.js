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



// const CharacterList = (props) => {
//   const characterElements = () => {
//     if (props.characters.length > 0) {
//       return props.characters.map((character, index) => {
//         return (
//           <li key={index} className="card">
//             <CharacterCard character={character} />
//           </li>
//         );
//       });
//     } 
//   };
//   return (
//     <section className="section_cards">
//       <ul className="cards">{characterElements}</ul>
//     </section>
//   );
//   else {
//     return <li>No hay ningún personaje con ese nombre, prueba con otro</li>;
//   }
// };
// export default CharacterList;

