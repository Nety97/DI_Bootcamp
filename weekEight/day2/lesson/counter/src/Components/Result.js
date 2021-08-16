const Result =(props) =>{
const {nety} = props
const {fname,sname, percentage,result} = nety
    return(
        <>
        <p>Results:</p>
        <p>{fname} & {sname}</p>
        <p>percentage {percentage}</p>
        <p>result: {result}</p>
        </>
    );
}

export default Result