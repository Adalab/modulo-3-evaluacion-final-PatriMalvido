import FilterByName from './FiltersByName';
import FilterByHouse from './FilterByHouse';

const Filters = (props)=> {
return (
    <section className="section__form">
          <form className="form">
              <FilterByName handleFilter={props.handleFilter}/>

            {/* <label className="form__label" htmlFor="name">
              Busca por personaje:
            </label>
            <input
              className="form__input-text"
              type="text"
              name="name"
              id="text"
            /> */}
            <FilterByHouse handleFilter={props.handleFilter}/>


            {/* <label className="form__label" htmlFor="house">
              Seleccciona la casa:
            </label>
            <select className="form__input-text" name="house" id="house">
              <option value="gryffindor">Gryffindor</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="slytherin">Slytherin</option>
            </select> */}
          </form>
        </section>
)
}

export default Filters;