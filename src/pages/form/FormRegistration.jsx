import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormI from './Form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import Archive from '../archive/Archive'
import EmailError from '../../components/wrongAutorization/EmailError'
import useAuth from '../../hooks/use-auth'

const FormRegistration = () => {
    const [errorEmail, setErrorEmail] = useState(false)
    const { isAuth, email } = useAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth()
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                )
            })
            .catch((error) => setErrorEmail(true))
        //.catch(console.error)
        //.catch(alert('Error'))
        //  navigate('/archive')
    }
    return !errorEmail ? (
        <div>
            <FormI title="Sign Up" handleClick={handleRegister} />
        </div>
    ) : (
        <EmailError />
    )
}

export default FormRegistration
