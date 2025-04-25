import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router'

const Applayout = () => {
  return (
    <div className='max-w-[1218px] mx-auto px-6'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Applayout