import React from 'react'
import './navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <img src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gr7zg7ziiwq-19%3A5?alt=media&token=77a177b6-3719-46e1-990a-042670cb4fb6" />
      <span className='logo'></span>
      <span>blinqpay</span>
    </div>
    <div className="navbar-center">
      <ul>
        <li><a href="#">Products</a></li>
        <li><a href="#">Developers</a></li>
        <li><a href="#">Company</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
    </div>
    <div className="navbar-right">
      <a href="#">Support</a>
      <a href="#" className='sign'>Sign In</a>
    </div>
  </nav>
  )
}


