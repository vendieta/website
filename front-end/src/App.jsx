import Card  from './components/card';
import Navbar from './components/Navbar';
import Pie from './components/Pie';
import './style/App.css'
import './style/buy.css'

function App() {
    return (
    <> 
      <Navbar/>
      <section className='card-container'>
          <Card
              ImgSrc="https://i.pinimg.com/originals/b2/fe/89/b2fe89c6539fca539478025bd43687ad.jpg"
              altText="Sample"
              name="This is a great product. about product is more beutiful because yes"
              price={29.99}/>
          <Card 
              ImageSrc="https://via.placeholder.com/150"
              altText="Sample Product"
              name="This is a great product."
              price={29.99}/>
          <Card 
              ImageSrc="https://via.placeholder.com/150"
              altText="Sample Product"
              name="This is a great product. about product is more beutiful because yes"
              price={29.99}
          />
      </section>
      <Pie/>
    </>
    )

};
export default App;