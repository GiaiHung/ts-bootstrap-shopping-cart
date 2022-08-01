import { Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'
import storeItems from '../data/items.json'

function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row sm={1} md={3} style={{ gap: '1rem', margin: 'auto' }}>
                {storeItems.map(item => <StoreItem key={item.id} {...item} />)}
            </Row>
        </>
    )
}

export default Store
