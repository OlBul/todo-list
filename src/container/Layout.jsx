import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../container/footer/Footer'
import NavBar from '../components/navBar/NavBar'
import Header from '../container/header/Header'

const Layout = () => {
    return (
        <>
            <div className="wrapper">
                {/* <NavBar /> */}
                <Header />
                <main className="main">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
