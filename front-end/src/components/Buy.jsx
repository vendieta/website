

function PageBuy({name,imgsrc,description,price}){
  return(
    <>
      <div>
        <h1 className="name-producto-buy">{name}</h1>
        <div>
          <img src={imgsrc} alt="" />
          <section>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </div>

        <div>
          <p>{description}</p>
          
        </div>
      </div>
    </>
  )
};

export default PageBuy;