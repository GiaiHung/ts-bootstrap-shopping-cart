import { Container, Row } from 'react-bootstrap'
import data from '../data/items.json'
import StoreItem from '../components/StoreItem'

function Store() {
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className="text-center display-1">Store</h1>
            <Row
                sm={1}
                md={2}
                lg={3}
                style={{
                    gap: '1.5rem',
                }}
            >
                {data.map((item) => (
                    <StoreItem key={item.id} {...item} />
                ))}
            </Row>
        </Container>
    )
}

export default Store
