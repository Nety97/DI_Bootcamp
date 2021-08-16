const Button = (props) =>{
    const {func, name , votes} = props
    return(
        <button onClick={func}>{name} {votes} </button>
    )

}
export default Button