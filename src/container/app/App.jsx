import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../../pages/home/Home'
import FormInput from '../../pages/form/FormInput'
import FormRegistration from '../../pages/form/FormRegistration'
import WrongAutorization from '../../components/wrongAutorization/WrongAutorization'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/input" element={<FormInput />} />
                    <Route path="/register" element={<FormRegistration />} />
                    <Route path="/wrongUp" element={<WrongAutorization />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
