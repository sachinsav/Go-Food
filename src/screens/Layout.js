import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout() {
  return (
    <>
    <div><Navbar /></div>
    <div style={{height:"56px"}}> </div>
    <Outlet />
   
    <div><Footer /></div>
    </>
  )
}

export default Layout
