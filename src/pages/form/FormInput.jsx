import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormI from './Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/use-auth'
import WrongAutorization from '../../components/wrongAutorization/WrongAutorization'
//import useAuth from '../../hooks/use-auth'

const FormInput = () => {
    const [errorSignIn, setErrorSignIn] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const { isAuth, email } = useAuth()

    const { isAuth, password } = useAuth()

    const handleInput = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                )
                //navigate('/')
            })
            .catch(console.error)
        //.catch(<wronrAutorization />)
        //.catch((error) => setErrorSignIn(true))
    }
    return isAuth ? (
        <WrongAutorization />
    ) : (
        <FormI title="Sign In" handleClick={handleInput} />
    )
}

export default FormInput
