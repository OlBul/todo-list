import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/use-auth'
import styles from './../../pages/form/Form.module.scss'

const WrongAutorization = () => {
    //const { isAuph, email, password } = useAuth()
    return (
        <div className={styles.registration}>
            <div className={styles.form}>
                <h2 className={styles.title}>Invalid data entered!!! </h2>
                <p className={styles.title}>Try again or register!</p>
                <Link className={styles.button} to="/">
                    Sign In
                </Link>
                <Link className={styles.register} to="/register">
                    Registration
                </Link>
            </div>
        </div>
    )
}

export default WrongAutorization