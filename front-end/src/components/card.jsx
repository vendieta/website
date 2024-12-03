import '../App.css'


function Card({ ImgSrc , altText , description , price }){

    return (
    <div className="card-product">
        <img className="img-product" src={ImgSrc} alt={altText} />
        <section className="info-product">
            <p className="description-product">{description}</p>
            <span className="price-product">${price}</span>
            <button className='buy-product' >Comprar</button>
        </section>
    </div>
    )
}

export default Card;