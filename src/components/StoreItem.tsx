import { Card, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utils/formatCurrency'

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeCart,
    } = useShoppingCart()
    const quantity: number = getItemQuantity(id)

    
    return (
        <Card style={{ padding: 0, width: '220px', height: '100%' }}>
            <Card.Img
                src={imgUrl}
                alt={name}
                variant="top"
                style={{ height: '150px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column p-2 pt-2">
                <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <h5 className="fs-6">{name}</h5>
                    <h5 className="fs-6 text-muted">{formatCurrency(price)}</h5>
                </Card.Title>
                <div className="mt-auto mb-1">
                    {quantity === 0 ? (
                        <Button size="sm" className="w-100" onClick={() => increaseCartQuantity(id)}>
                            Add to cart
                        </Button>
                    ) : (
                        <div className="d-flex flex-column align-items-center gap-2">
                            <div className="d-flex align-items-center gap-2">
                                <Button size="sm" onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <span>{quantity} in cart</span>
                                <Button size="sm" onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button size="sm" variant="danger" onClick={() => removeCart(id)}>
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItem
