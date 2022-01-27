const FilterByName = (props)=>{

  const handleChange =(ev)=>{
    props.handleFilter ( {
    value: ev.currentTarget.value,
    key: 'name',
  });
};

return (
    <>
    <label className="form__label" htmlFor="name">
    Busca por personaje:
  </label>
  <input
    className="form__input-text"
    placeholder='Por ej. Voldemor'
    type="text"
    name="name"
    id="text"
    onChange={handleChange}
    value={props.nameFilter}
  />
  </>
)
}
export default FilterByName;