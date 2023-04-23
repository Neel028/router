import React from 'react'
import { Link } from 'react-router-dom'
import './css/nav.css'

const Nav = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contect'>Contect Us</Link>
          </li>
          <li>
            <Link to='/help'>Help</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Nav
