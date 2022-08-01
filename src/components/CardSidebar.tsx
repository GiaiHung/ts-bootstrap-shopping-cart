import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartSidebarItem from './CartSidebarItem'
import {formatCurrency} from '../utils/formatCurrency'
import storeItems from '../data/items.json'

type CardSidebarProps = {
    isOpen: boolean
}

function CardSidebar({ isOpen }: CardSidebarProps) {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Your cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <CartSidebarItem key={item.id} {...item} />
                    ))}
                    {cartItems.length > 0 && <div className='ms-auto fs-5 fw-bold'>
                        Total: {" "}
                        {formatCurrency(
                            cartItems.reduce((total, currentItem) => {
                                const item = storeItems.find(item => item.id === currentItem.id)
                                return total + (item?.price || 0) * currentItem.quantity
                            }, 0)
                        )}
                    </div>}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default CardSidebar
