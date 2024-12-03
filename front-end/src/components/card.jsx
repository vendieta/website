import '../App.css'


function Card({ ImgSrc , altText , description , price }){

    return (
    <div className="card-product">
        <div className="img-product-container" >
            <a href="">
                <img className="img-product" src={ImgSrc} alt={altText} />
            </a>
        </div>
        <section className="info-product">
            <p className="description-product">{description}</p>
            <span className="price-product">${price}</span>
            <button className='buy-product' g>Comprar</button>
        </section>
    </div>
    )
}

export default Card;