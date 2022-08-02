import { Routes, Route, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { About, Home, Store } from './pages'

function App() {
    return <ShoppingCartProvider>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/store' element={<Store />} />
        </Routes>
    </ShoppingCartProvider>
}

export default App
