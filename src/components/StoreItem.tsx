import React from 'react'
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
    const quantity = getItemQuantity(id)

    return (
        <Card style={{ width: '340px', padding: 10 }}>
            <Card.Img
                variant="top"
                alt={name}
                src={imgUrl}
                style={{ height: '250px', width: '100%', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title>
                    <div className="d-flex justify-content-between">
                        <h3>{name}</h3>
                        <h3 className="text-muted">{formatCurrency(price)}</h3>
                    </div>
                </Card.Title>
                {quantity === 0 ? (
                    <Button
                        variant="primary"
                        style={{ width: '100%' }}
                        onClick={() => increaseCartQuantity(id)}
                    >
                        + Add to cart
                    </Button>
                ) : (
                    <div className="d-flex flex-column gap-2 align-items-center">
                        <div className="d-flex gap-2">
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => decreaseCartQuantity(id)}
                            >
                                -
                            </Button>
                            <h3>{quantity} in cart</h3>
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => increaseCartQuantity(id)}
                            >
                                +
                            </Button>
                        </div>
                        <Button
                            variant="danger"
                            onClick={() => removeCart(id)}
                        >
                            Remove
                        </Button>
                    </div>
                )}
            </Card.Body>
        </Card>
    )
}

export default StoreItem
