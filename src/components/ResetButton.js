const ResetButton =(props)=>{
    const handleClick =(ev) =>{
        props.resetButton(ev);
    };
    return (
        <button className='button' onClick={handleClick}>
            Borrar
        </button>
    );
   };
   export default ResetButton;