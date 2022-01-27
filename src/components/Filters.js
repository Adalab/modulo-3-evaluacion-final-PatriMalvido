import FilterByName from './FiltersByName';
import FilterByHouse from './FilterByHouse';

const Filters = (props) => {
  return (
    <section className="section__form">
      <form className="form" onSubmit={(ev) => ev.preventDefault()}>
        <FilterByName handleFilter={props.handleFilter} />
        <FilterByHouse handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
