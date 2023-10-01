import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { openSignIn, openSignUp } from '../../redux/formSlice'
import { removeUser } from '../../redux/userSlice'
import styles from './NavBar.module.scss'
import useAuth from '../../hooks/use-auth'

const NavBar = () => {
    const dispatch = useDispatch()
    const { isAuth } = useAuth()

    const deleteUser = () => {
        /* !isAuth && dispatch(openSignIn()) */
        dispatch(removeUser())
    }

    return (
        <Navbar bg="dark" variant="dark" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="#home">Note App</Navbar.Brand>
                {!isAuth ? (
                    <Nav className="ms-auto">
                        <Link
                            to="/register"
                            onClick={() => dispatch(openSignUp())}
                            bg="dark"
                            variant="dark"
                            className="nav-link"
                        >
                            Sign Up
                        </Link>
                        <Link
                            to="/input"
                            onClick={() => dispatch(openSignIn())}
                            bg="dark"
                            variant="dark"
                            className="nav-link"
                        >
                            Sign In
                        </Link>
                    </Nav>
                ) : (
                    <Nav className="ms-auto">
                        <NavLink
                            to="/"
                            bg="dark"
                            variant="dark"
                            className="nav-link"
                            onClick={() => dispatch(removeUser())}
                        >
                            Sign out
                        </NavLink>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
}

export default NavBar
