import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import FormI from './Form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../redux/userSlice'

import WrongAutorization from '../../components/wrongAutorization/WrongAutorization'

const FormRegistration = () => {
    const [er, setEr] = useState(false)
    const dispatch = useDispatch()

    const handleRegister = (email, password) => {
        const auth = getAuth()
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
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }

    return (
        <div>
            {er ? (
                <WrongAutorization />
            ) : (
                <FormI title="Sign Up" handleClick={handleRegister} />
            )}
            {/* <FormI title="Sign Up" handleClick={handleRegister} /> */}
        </div>
    )
}

export default FormRegistration
