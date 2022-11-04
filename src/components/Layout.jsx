import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = () => {
    return (
        <>
            <div className="wrapper">
                <NavBar />
                <main className="main">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
