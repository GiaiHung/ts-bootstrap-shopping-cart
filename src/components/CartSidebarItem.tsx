import { Stack, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'
import { formatCurrency } from '../utils/formatCurrency'

type CartSidebarItem = {
    id: number
    quantity: number
}

function CartSidebarItem({ id, quantity }: CartSidebarItem) {
    const cartItems = storeItems.find((item) => item.id === id)
    const { removeCart } = useShoppingCart()

    if (cartItems == null) return null

    return (
        <Stack
            direction="horizontal"
            gap={2}
            className="d-flex align-items-center"
        >
            <img
                src={cartItems.imgUrl}
                alt={cartItems.name}
                style={{ width: '125px', height: '75px', objectFit: 'cover' }}
            />
            <div className="me-auto">
                <div>
                    {cartItems.name}{' '}
                    {quantity > 1 && (
                        <span
                            className="text-muted"
                            style={{ fontSize: '0.65rem' }}
                        >
                            {quantity}x
                        </span>
                    )}
                </div>
                <div className="text-muted">
                    {formatCurrency(cartItems.price)}
                </div>
            </div>
            <div>{formatCurrency(cartItems.price * quantity)}</div>
            <Button size="sm" variant="outline-danger" onClick={() => removeCart(id)}>
                &times;
            </Button>
        </Stack>
    )
}

export default CartSidebarItem