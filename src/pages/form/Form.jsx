import { useState, useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { openSignUp } from '../../redux/formSlice'

import styles from './Form.module.scss'

const FormI = ({ title, handleClick }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passDirty, setPassDirty] = useState(false)
    const [emailError, setEmailError] = useState('Enter email...')
    const [passError, setPassError] = useState('Enter password...')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Enter a valid email!')
        } else {
            setEmailError('')
        }
    }

    const passHandler = (e) => {
        setPass(e.target.value)

        if (e.target.value.length < 4 || e.target.value.length > 8) {
            setPassError('Password must be between 4 and 8 characters')
            if (!e.target.value) {
                setPassError('Enter password...')
            }
        } else {
            setPassError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPassDirty(true)
                break
        }
    }

    const dispatch = useDispatch()
    return (
        <div className="container">
            <div className={styles.registration}>
                <Form className={styles.form}>
                    <h3 className={styles.title}>
                        {title === 'Sign In' ? 'Log On' : 'Registration'}
                    </h3>
                    <Form.Group>
                        <Form.Label htmlFor="email" className={styles.label}>
                            Email
                        </Form.Label>
                        {emailDirty && emailError && (
                            <div style={{ color: 'red', paddingBottom: '5px' }}>
                                {emailError}
                            </div>
                        )}
                        <Form.Control
                            className={styles.input}
                            name="email"
                            type="email"
                            placeholder="Email..."
                            value={email}
                            onChange={(e) => emailHandler(e)}
                            onBlur={(e) => blurHandler(e)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={styles.label} htmlFor="password">
                            Password
                        </Form.Label>
                        {passError && passDirty && (
                            <div style={{ color: 'red', paddingBottom: '5px' }}>
                                {passError}
                            </div>
                        )}
                        <Form.Control
                            className={styles.input}
                            required
                            autoCapitalize="current-password"
                            type="password"
                            name="password"
                            value={pass}
                            placeholder="******"
                            onChange={(e) => passHandler(e)}
                            onBlur={(e) => blurHandler(e)}
                        />
                    </Form.Group>
                    <Link
                        type="submit"
                        to="/home"
                        bg="dark"
                        variant="dark"
                        className={
                            formValid ? styles.button : styles.buttonDisabled
                        }
                        onClick={() => handleClick(email, pass)}
                        disabled={!formValid}
                    >
                        {title}
                    </Link>
                    {title === 'Sign In' && (
                        <Link
                            to="/register"
                            className={styles.register}
                            onClick={() => dispatch(openSignUp())}
                        >
                            Registration
                        </Link>
                    )}
                </Form>
            </div>
        </div>
    )
}

export default FormI
