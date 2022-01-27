const ResetButton =(props)=>{
    const handleClick =(ev) =>{
        props.resetButton(ev);
    };
    return (
        <button className='button' onClick={handleClick}>
            Volver al listado
        </button>
    );
   };
   export default ResetButton;