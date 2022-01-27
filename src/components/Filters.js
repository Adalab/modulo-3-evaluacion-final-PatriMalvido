import FilterByName from './FiltersByName';
import FilterByHouse from './FilterByHouse';
import ResetButton from './ResetButton';

const Filters = (props) => {
  return (
    <section className="section__form">
      <form className="form" onSubmit={(ev) => ev.preventDefault()}>
        <FilterByName handleFilter={props.handleFilter} nameFilter={props.nameFilter}/>
        <FilterByHouse handleFilter={props.handleFilter} />
        <ResetButton handleClick={props.handleClick} />
      </form>
    </section>
  );
};

export default Filters;
