import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container } from 'react-bootstrap';
import { BsCart4 } from 'react-icons/bs';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { ProductDetails } from './Components/ProductDetails';
import './Components/style.css'

function App() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //console.log('length', cart.length)
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">Online-Shopping</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="#">About</Nav.Link>
                <Nav.Link as={Link} to="#">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  <BsCart4 size='35px' color='blue' />
                  { cart.length !== 0 ?
                    <span className="count">{cart.length}</span> : null
                  }
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
