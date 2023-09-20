import { useState, useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { openSignUp, openSignIn } from '../../redux/formSlice'
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
            default:
        }
    }

    const dispatch = useDispatch()
    return (
        <>
            <div className="container">
                <div className={styles.registration}>
                    <Form className={styles.form}>
                        <h3 className={styles.title}>
                            {title === 'Sign In' ? 'Log On' : 'Registration'}
                        </h3>
                        <Link className={styles.close} to="/">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.3 0.709995C13.2075 0.617291 13.0976 0.543744 12.9766 0.493562C12.8556 0.443381 12.726 0.417551 12.595 0.417551C12.464 0.417551 12.3343 0.443381 12.2134 0.493562C12.0924 0.543744 11.9825 0.617291 11.89 0.709995L6.99999 5.58999L2.10999 0.699995C2.01741 0.607413 1.9075 0.533973 1.78654 0.483868C1.66557 0.433763 1.53593 0.407974 1.40499 0.407974C1.27406 0.407974 1.14442 0.433763 1.02345 0.483868C0.902487 0.533973 0.792576 0.607413 0.699995 0.699995C0.607413 0.792576 0.533973 0.902487 0.483868 1.02345C0.433763 1.14442 0.407974 1.27406 0.407974 1.40499C0.407974 1.53593 0.433763 1.66557 0.483868 1.78654C0.533973 1.9075 0.607413 2.01741 0.699995 2.10999L5.58999 6.99999L0.699995 11.89C0.607413 11.9826 0.533973 12.0925 0.483868 12.2135C0.433763 12.3344 0.407974 12.4641 0.407974 12.595C0.407974 12.7259 0.433763 12.8556 0.483868 12.9765C0.533973 13.0975 0.607413 13.2074 0.699995 13.3C0.792576 13.3926 0.902487 13.466 1.02345 13.5161C1.14442 13.5662 1.27406 13.592 1.40499 13.592C1.53593 13.592 1.66557 13.5662 1.78654 13.5161C1.9075 13.466 2.01741 13.3926 2.10999 13.3L6.99999 8.40999L11.89 13.3C11.9826 13.3926 12.0925 13.466 12.2135 13.5161C12.3344 13.5662 12.4641 13.592 12.595 13.592C12.7259 13.592 12.8556 13.5662 12.9765 13.5161C13.0975 13.466 13.2074 13.3926 13.3 13.3C13.3926 13.2074 13.466 13.0975 13.5161 12.9765C13.5662 12.8556 13.592 12.7259 13.592 12.595C13.592 12.4641 13.5662 12.3344 13.5161 12.2135C13.466 12.0925 13.3926 11.9826 13.3 11.89L8.40999 6.99999L13.3 2.10999C13.68 1.72999 13.68 1.08999 13.3 0.709995Z"
                                    fill="white"
                                />
                            </svg>
                        </Link>
                        <Form.Group>
                            <Form.Label
                                htmlFor="email"
                                className={styles.label}
                            >
                                Email
                            </Form.Label>
                            {emailDirty && emailError && (
                                <div
                                    style={{
                                        color: 'red',
                                        paddingBottom: '5px',
                                    }}
                                >
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
                            <Form.Label
                                className={styles.label}
                                htmlFor="password"
                            >
                                Password
                            </Form.Label>
                            {passError && passDirty && (
                                <div
                                    style={{
                                        color: 'red',
                                        paddingBottom: '5px',
                                    }}
                                >
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
                            to="/"
                            bg="dark"
                            variant="dark"
                            className={
                                formValid
                                    ? styles.button
                                    : styles.buttonDisabled
                            }
                            onClick={() => handleClick(email, pass)}
                            disabled={!formValid}
                        >
                            {title}
                        </Link>
                        {title === 'Sign In' ? (
                            <Link
                                to="/register"
                                className={styles.register}
                                onClick={() => dispatch(openSignUp())}
                            >
                                Registration
                            </Link>
                        ) : (
                            <Link
                                to="/input"
                                className={styles.register}
                                onClick={() => dispatch(openSignIn())}
                            >
                                Sing In
                            </Link>
                        )}
                    </Form>
                </div>
            </div>
        </>
    )
}

export default FormI
