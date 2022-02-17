const FilterByGender =(props)=>{
    const handleChange =(ev)=>{
        props.handleFilter ( {
        value: ev.currentTarget.value,
        key: 'gender',
      });
    };

    
    return (
        <>
          <label className="form__label" htmlFor="gender">
            Selecciona el genero:
          </label>
          <select 
            className="form__input-text" 
            name="gender" 
            key= 'gender'
            onChange={handleChange}
            value={props.gender}
            >
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
           
          </select>
        </>
      );

}
export default FilterByGender;