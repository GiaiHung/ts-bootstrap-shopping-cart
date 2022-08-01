import { NavLink } from 'react-router-dom'
import { Navbar as NavbarBs, Container, Nav, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useShoppingCart } from '../context/ShoppingCartContext'

function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white mb-3 shadow-sm">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && <Button
                    style={{ position: 'relative' }}
                    variant="outline-primary"
                    className="rounded-circle btn-sm"
                    onClick={openCart}
                >
                    <FaShoppingCart />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            color: '#fff',
                            width: '1rem',
                            height: '1rem',
                            transform: 'translate(20%, 20%)',
                        }}
                        className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
                    >
                        {cartQuantity}
                    </div>
                </Button>}
            </Container>
        </NavbarBs>
    )
}

export default Navbar
