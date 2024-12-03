import Card  from './components/card';

function App() {
    return (
    <>
        <section className='card-container'>
            <Card
                ImgSrc="https://i.pinimg.com/originals/b2/fe/89/b2fe89c6539fca539478025bd43687ad.jpg"
                altText="Sample"
                description="This is a great product. about product is more beutiful because yes"
                price={29.99}/>
            <Card 
                ImageSrc="https://via.placeholder.com/150"
                altText="Sample Product"
                description="This is a great product."
                price={29.99}/>
            <Card 
                ImageSrc="https://via.placeholder.com/150"
                altText="Sample Product"
                description="This is a great product. about product is more beutiful because yes"
                price={29.99}
            />
        </section>
    </>
    )

}
export default App;