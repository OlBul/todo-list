import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

import About from './pages/About'
import Archive from './pages/Archive'
import Home from './pages/Home'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/archive" element={<Archive />} />
                </Route>
            </Routes>
        </>
    )
}

export default App