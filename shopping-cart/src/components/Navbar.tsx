import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';


export function Navbar() {

    const { openCart, cartQuantity } = useShoppingCart()

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className='me-auto'>
                <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink} >Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink} >About</Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
                <Button onClick={openCart} style={{ width: "2.5rem", height: "2.5rem", position: "relative"}} variant='outline-primary' className="rounded-circle">
                <svg style={{ display: "flex", margin: "0 auto"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-heart-fill" viewBox="0 0 16 16">
                    <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                </svg>
                <div 
                className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
                style={{ 
                    fontSize: '10px',
                    color: 'white', 
                    width: "1rem", 
                    height: "1rem",
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    transform: 'translate(25%, 25%)'}}>
                        {cartQuantity}
                </div>
            </Button>
            )}
            
        </Container>
    </NavbarBs>
  )
}

