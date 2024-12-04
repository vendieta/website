
function Card({ ImgSrc , altText , name , price }){

    return (
    <a href='../Buy.jsx'>
        <div className="card-product">
            <div className="img-product-container" >
                    <img className="img-product" src={ImgSrc} alt={altText} />
            </div>
            <section className="info-product">
                <p className="description-product">{name}</p>
                <span className="price-product">${price}</span>
                <button className='buy-product' >Comprar</button>
            </section>
        </div>
    </a>
    )
};

export default Card;