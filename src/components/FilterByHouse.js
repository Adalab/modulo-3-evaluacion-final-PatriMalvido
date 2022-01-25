const FilterByHouse = (props) => {
const handleChange =(ev)=>{
    props.handleFilter({
        value:ev.currentTarget.value,
        key:'house',
    });
};

  return (
    <>
      <label className="form__label" htmlFor="house">
        Selecciona la casa:
      </label>
      <select 
        className="form__input-text" 
        name="house" 
        key= 'house'
        onChange={handleChange}
        >
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
      </select>
    </>
  );
};
export default FilterByHouse;
