import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import CartModal from '../components/CartModal/CartModal'
import FavoriteModal from '../components/FavoriteModal'

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <CartModal />
      <FavoriteModal />
    </div>
  )
}

export default Layout
