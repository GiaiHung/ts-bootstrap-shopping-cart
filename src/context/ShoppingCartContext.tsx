import { createContext, ReactNode, useContext, useState } from 'react'
import CardSidebar from '../components/CardSidebar'
import { useLocalStorage } from '../hooks/useLocalStorage'

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeCart: (id: number) => void
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderProps = {
    children: ReactNode
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('CART_ITEMS', [])
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const cartQuantity = cartItems.reduce(
        (quantity, item) => quantity + item.quantity,
        0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems((cartItem) => {
            if (cartItem.find((item) => item.id === id) == null) {
                return [...cartItem, { id, quantity: 1 }]
            } else {
                return cartItem.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems((cartItem) => {
            if (cartItem.find((item) => item.id === id)?.quantity === 1) {
                return cartItem.filter((item) => item.id !== id)
            } else {
                return cartItem.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeCart(id: number) {
        setCartItems((cartItem) => {
            return cartItem.filter((item) => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeCart,
                openCart,
                closeCart,
                cartQuantity,
                cartItems,
            }}
        >
            {children}
            <CardSidebar isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}
