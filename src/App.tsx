import { Routes, Route } from 'react-router-dom'

import { Home, About, Store } from './pages'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
    return (
        <ShoppingCartProvider>
            <Navbar />
            <div style={{width: '90vw', maxWidth: '1080px', margin: 'auto' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/store" element={<Store />} />
                </Routes>
            </div>
        </ShoppingCartProvider>
    )
}

export default App
