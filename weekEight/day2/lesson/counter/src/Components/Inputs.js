const Inputs =(props) =>{
    const { onInputOne, onInputTwo, fname, sname} = props;

    return(
        <>
        <input type='text' onChange={onInputOne} value={fname}></input>
        <p>{fname}</p>
        <input type='text' onChange={onInputTwo} value={sname}></input>
        <p>{sname}</p>
        </>
    );
}

export default Inputs