import { useSelector } from 'react-redux'

const useAuth = () => {
    const { login, email, password, id } = useSelector((state) => state.user)
    return {
        isAuth: !!email,
        login,
        email,
        password,
        id,
    }
}

export default useAuth
