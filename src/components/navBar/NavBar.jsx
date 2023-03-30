import React from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { openSignIn, openSignUp } from '../../redux/formSlice'
import { removeUser } from '../../redux/userSlice'
import styles from './NavBar.module.scss'
import useAuth from '../../hooks/use-auth'
//import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const dispatch = useDispatch()
    //const navigate = useNavigate()
    const { isAuth } = useAuth()

    const deleteUser = () => {
        !isAuth && dispatch(openSignIn())
        dispatch(removeUser())
    }

    return (
        <Navbar bg="dark" variant="dark" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="#home">Note App</Navbar.Brand>
                <Nav className="me-auto ms-auto">
                    <NavLink to="/home" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        Getting Started
                    </NavLink>
                    <NavLink to="/archive" className="nav-link">
                        Archive
                    </NavLink>
                </Nav>
                <div className="buttons">
                    <Link
                        to="/register"
                        onClick={() => dispatch(openSignUp())}
                        bg="dark"
                        variant="dark"
                        className={styles.button}
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/"
                        onClick={() => dispatch(openSignIn())}
                        bg="dark"
                        variant="dark"
                        className={styles.button}
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/"
                        bg="dark"
                        variant="dark"
                        className={styles.button}
                        onClick={deleteUser}
                        //onClick={() => dispatch(openSignIn())}
                        //onClick={() => dispatch(removeUser())}
                    >
                        {isAuth ? 'Sign out' : 'Sign In'}
                    </Link>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar
