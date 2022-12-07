import './App.css';
import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './BakeryItem.js';
import './BakeryItem.css';
import MakeItem from './BakeryItem.js';
import { CarouselItem } from 'react-bootstrap';

function App() {
  const [type, setType] = useState('All');
  const [cart, setCart] = useState([])
  const[total, setTotal] = useState(0)

  const bakeryData = [
    { name: 'Bread', type: 'bread', price: 10, restriction: 'nut-free', image: 'https://www.freepnglogos.com/uploads/bread-png/download-bread-transparent-background-png-image-27.png', desc: "Our iconic, family recipe baked bread."},
    { name: 'Croissant', type: 'pastry', price: 5, restriction: 'nut-free', image: 'https://www.freepnglogos.com/uploads/croissant-png/download-croissant-pic-images-14.png', desc: "These delectible pastries are the perfect way to start your morning."},
    { name: 'Cupcake', type: 'cake', price: 5, restriction: 'nut-free', image: 'https://www.pngall.com/wp-content/uploads/5/Yummy-Cupcake-PNG-Picture.png', desc: "A perfect, mini treat for whatever you are celebrating. Can also be bought by the half-dozen."},
    { name: 'Canoli', type: 'pastry', price: 3.5, restriction: 'gluten-free', image: 'https://www.pngkit.com/png/full/310-3106582_cannoli-png-cannoli.png', desc: "Old Italian style canolis that will be sure to have you coming back for seconds."},
    { name: 'Focaccia', type: 'bread', price: 10, restriction: 'nut-free', image: 'https://www.pngplay.com/wp-content/uploads/13/Focaccia-PNG-Free-File-Download.png', desc: "A must try for our focaccia lovers out there, best paired with our in house dipping sauce."},
    { name: 'Cookies', type: 'cake', price: 10, restriction: 'nut-free & gluten-free', image: 'https://www.freepnglogos.com/uploads/cookie-png/cookie-cliparts-transparent-download-clip-art-22.png', desc: "Our award-winning chocolate chip cookies that just melt in your mouth."},
    { name: 'Muffin', type: 'pastry', price: 3.5, restriction: 'nut-free & gluten-free', image: 'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Cakes-PNG/Transparent_Muffin_Large_PNG_Picture.png?m=1434276658', desc: "Our healthier take on a morning treat, but tastes just as good."},
    { name: 'Scone', type: 'pastry', price: 5, restriction: 'nut-free', image: 'https://www.pngplay.com/wp-content/uploads/15/Scones-Raisin-PNG-Clipart-Background.png', desc: "Rasians never tasted so good in something so sweet."},
    { name: 'Cake', type: 'cake', price: 20, restriction: 'nut-free', image: 'https://www.pngmart.com/files/16/Fresh-Chocolate-Cake-PNG-Transparent-Image.png', desc: "The star of our show is our decadent chocolate cake. Enough to feed many and keep the party going."},
    { name: 'Bagel', type: 'bread', price: 5, restriction: 'nut-free', image: 'https://pngimg.com/uploads/bagel/bagel_PNG29.png', desc: "The perfect NY bagel can be paired with our in house lox and cream cheese."},
    { name: 'Doughnuts', type: 'pastry', price: 3.5, restriction: 'nut-free & gluten-free', image: 'https://www.pngarts.com/files/3/Donut-PNG-Image-with-Transparent-Background.png', desc: "The sweet treat to get your morning going. Comes in old fashion, vanilla or chocolate."},
    { name: 'Danish', type: 'pastry', price: 3.5, restriction: 'gluten-free', image: 'https://www.entenmanns.com/sites/default/files/styles/large/public/Unknown.png?itok=QbN-yDJs', desc: "Take your tastebuds on a trip over the atlantic and try one of our danishes. So authentic you just might think you were in Denmark."},
    { name: 'Pie', type: 'cake', price: 15, restriction: 'nut-free', image: 'https://www.pngall.com/wp-content/uploads/10/Pie-PNG-Clipart.png', desc: "The perfect pie for an after Thanksgiving dinner treat. Comes in apple, cherry and pumpkin."},
    { name: 'Coffee', type: 'drink', price: 3, restriction: 'nut-free & gluten-free', image: "https://www.pngkey.com/png/full/943-9430047_coffee.png", desc: "Get it iced or hot. Additional expresso shots are $2."}
   ]   

   //select filter function 

   const selectFilterType = eventKey => {
    setType(eventKey);
  }
  //match filter function

  const matchesFilterType = item => {
    if(type === "All") { 
      return true
    } else if (type === item.type) {
      return true
    } else if (type === item.restriction){
      return true
    } else if (type === "price") {
      bakeryData.sort((a, b) => a.price - b.price);
      return bakeryData
    } else {
      return false
    }
  }

  const filteredData = bakeryData.filter(matchesFilterType)
  if (type === "price"){
    filteredData[0] = bakeryData[0]
  }
  
  return (
    <div className="App">

      {/* navbar code */}
      
      <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#" className='nav-title'>Guiseppe's</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Bakery Items" id="collasible-nav-dropdown" onSelect={selectFilterType}>
              <NavDropdown.Item href="#action/3.1" eventKey = "pastry">Patries</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" eventKey ="bread">
                Bread
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey ="cake">Cake</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dietary Restrictions" id="collasible-nav-dropdown" onSelect={selectFilterType}>
              <NavDropdown.Item href="#action/3.1" eventKey="gluten-free">Gluten-Free</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" eventKey="nut-free">
                Nut-Free
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey="nut-free & gluten-free">Nut-Free & Gluten-Free</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sorty By" id="collasible-nav-dropdown" onSelect={selectFilterType}>
              <NavDropdown.Item href="#action/3.1" eventKey = "price">Price</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <NavDropdown title="Cart" id="collasible-nav-dropdown">
                <div className="Cart">
                  {cart}
                  <br/>
                  <br/>
                  <strong><p>Cart Total: ${total}</p></strong>
                </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {/* page header */}

      <h1 className='title'> Guiseppe's Bakery</h1>
      <img className="logo" src={require('./cookieicon.png')} alt='cookie logo' />
      
      {/* rendering filtered item */}
      <div>
        {filteredData.map(item => 
          <MakeItem item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>
          )}
      </div>
    </div>
  );
}

export default App;
