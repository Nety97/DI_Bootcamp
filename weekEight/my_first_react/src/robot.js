const Robot = (props) => {
    const  {robotinfo}= props
    const {name, email, username, id} = robotinfo
    return(
        <>
            <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                <img src={`https://robohash.org/${id}/size=200x200`} alt='robot'/>
                <div>
                    <h2>{name}</h2>
                    <p>Email: {email}</p>
                    <p>{username}</p>
                </div>  
            </div>
        </>
    )
}

export default Robot