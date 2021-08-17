const Form = (props) => {
    let {fname, lname, age, gender,destination, nuts, lactose, vegan} = props
    return (
        <>
        <h2>form </h2>
        <h3>Your name: {fname}</h3>
        <h3>Your lastname: {lname}</h3>
        <h3>Your age: {age}</h3>
        <h3>Your gender: {gender}</h3>
        <h3>Your destination: {destination}</h3>
        <h3>Your dietary restrictions:</h3>
        <h4>**Nuts free: {nuts}</h4>
        <h4>**Lactose Free: {lactose}</h4>
        <h4>**Vegan meal: {vegan}</h4>
        </>
    )
}



export default Form