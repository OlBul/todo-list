import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../container/header/Header'

const Layout = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <main className="main">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout
