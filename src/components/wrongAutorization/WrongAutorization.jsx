import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../../pages/form/Form.module.scss'

const WrongAutorization = () => {
    return (
        <div className={styles.registration}>
            <div className={styles.form}>
                <h2 className={styles.title}>
                    Invalid data entered or such email already exists!!!{' '}
                </h2>
                <p className={styles.title}>Try again or register!</p>
                <Link className={styles.button} to="/input">
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
