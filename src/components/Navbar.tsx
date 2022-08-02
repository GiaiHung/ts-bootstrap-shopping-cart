import { NavLink } from 'react-router-dom'
import { Navbar as NavbarBs, Nav, Container, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useShoppingCart } from '../context/ShoppingCartContext'

function Navbar() {
    const { cartQuantity, openCart } = useShoppingCart()

    return (
        <NavbarBs sticky="top" className="bg-white mb-3 shadow-sm">
            <Container>
                <Nav className="fs-2 me-auto gap-4">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && <Button
                    variant="outline-primary"
                    className="btn-lg"
                    style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '100%',
                        padding: 0,
                        width: '3rem',
                        height: '3rem',
                        fontSize: '1.5rem',
                    }}
                    onClick={openCart}
                >
                    <FaShoppingCart />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: '1.5rem',
                            height: '1.5rem',
                            padding: '15px',
                            color: '#fff',
                            transform: 'translate(30%, 30%)',
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
