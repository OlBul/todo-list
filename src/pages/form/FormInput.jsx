import { useDispatch } from 'react-redux'
import FormI from './Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../redux/userSlice'

const FormInput = () => {
    const dispatch = useDispatch()

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
            })
            .catch(console.error)
    }
    return <FormI title="Sign In" handleClick={handleInput} />
}

export default FormInput
