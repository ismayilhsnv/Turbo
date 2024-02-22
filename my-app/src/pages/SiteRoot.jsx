import React from 'react'
import Header from '../layout/Client/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../layout/Client/Footer/Footer'

const SiteRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SiteRoot