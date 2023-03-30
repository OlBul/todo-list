import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import About from '../../pages/about/About'
import Archive from '../../pages/archive/Archive'
import Home from '../../pages/home/Home'
import FormI from '../../pages/form/Form'
import FormInput from '../../pages/form/FormInput'
import FormRegistration from '../../pages/form/FormRegistration'
import useAuth from '../../hooks/use-auth'
import WrongAutorization from '../../components/wrongAutorization/WrongAutorization'
import EmailError from '../../components/wrongAutorization/EmailError'

//import FormInput from '../../pages/FormInput.jsx/FormInput'
//import { FormRegistration } from '../../pages/formRegistration/FormRegistraition'

function App() {
    const { isAuth } = useAuth()
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* <Route index element={<FormInput />} />
                    <Route path="/register" element={<FormRegistration />} /> */}
                    !isAuth ? (
                    <Route path="/home" element={<Home />} />
                    ) : (
                    <Route path="/" element={<FormInput />} />){' '}
                    {/*  <Route path="/" element={<FormInput />} /> */}
                    <Route path="/register" element={<FormRegistration />} />
                    {/* <Route path="/home" element={<Home />} /> */}
                    <Route path="/about" element={<About />} />
                    <Route path="/archive" element={<Archive />} />
                    {/* <Route path="/input" element={<FormInput />} /> */}
                    <Route path="/wrongUp" element={<WrongAutorization />} />
                    <Route path="/emailError" element={<EmailError />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
