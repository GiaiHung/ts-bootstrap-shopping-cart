import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utils/formatCurrency'
import CartSidebarItem from './CartSidebarItem'
import data from '../data/items.json'

type CardSidebarProps = {
    isOpen: boolean
}

function CardSidebar({ isOpen }: CardSidebarProps) {
    const { cartItems, closeCart } = useShoppingCart()

    return (
        <Offcanvas
            show={isOpen}
            onHide={closeCart}
            placement="end"
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="fs-2 display-2">
                    Your cart
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <CartSidebarItem key={item.id} {...item} />
                    ))}
                </Stack>
                {cartItems.length > 0 && <h3 className="text-end mt-5">
                    Total:{' '}
                    {formatCurrency(
                        cartItems.reduce((total, currentItem) => {
                            const item = data.find(
                                (item) => item.id === currentItem.id
                            )
                            return (
                                total +
                                (item?.price || 0) * currentItem.quantity
                            )
                        }, 0)
                    )}
                </h3>}
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default CardSidebar
