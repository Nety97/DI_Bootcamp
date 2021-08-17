const CardBoot = (props) => {
    let {title, imageUrl, buttonUrl, description, title2,description2,buttonLabel2,buttonURL2} = props
    return(
        <>
        <div className="card m-5" style={{width: '30rem'}}>
            <img className="card-img-top" src={imageUrl} alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={buttonUrl} className="btn btn-primary">Go to wikipedia</a>
            </div>
        </div>
        {/* Exercise Jubotron */}
        <div class="p-5 bg-light">
            <h1 class="mb-3">{title2}</h1>
            <h4 class="mb-3">{description2}</h4>
            <a class="btn btn-primary" href={buttonURL2} role="button">{buttonLabel2}</a>
        </div>
        </>
    )
}

export default CardBoot