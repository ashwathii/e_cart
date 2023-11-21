import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  const wishlist=useSelector((state)=>state.wishlistReducer)
 /*  console.log(wishlist); */
 const cart=useSelector((state)=>state.cartReducer)
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand href="#home"><Link style={{textDecoration:'none', color:'black'}} to={'/'}> <i class="fa-solid fa-cart-shopping fa-flip"></i> TAKE AWAY</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border bordder-secondary rounded ms-3 ' href="#home"><Link style={{textDecoration:'none', color:'black'}} to={'/wishlist'}>Wishlist <i class="fa-solid fa-heart"></i><Badge bg="secondary" className='ms-2'>{wishlist.length}</Badge></Link> </Nav.Link> 

            {/* cart */}
            <Nav.Link className='btn border bordder-secondary rounded ms-3 ' href="#link"><Link style={{textDecoration:'none', color:'black'}} to={'/cart'}>Cart <i class="fa-solid fa-cart-shopping"></i><Badge bg="secondary" className='ms-2'>{cart.length}</Badge></Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header