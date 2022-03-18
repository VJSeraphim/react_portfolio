import React from 'react'

import './Navbar.scss'
import { images } from '../../constants'

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img 
          src={images.logo}
          alt="logo"
        />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'works', 'skills', 'contact'].map((i) => (
          <li key={`link=${i}`} className="app__flex p-text">
            <div />
            <a href={`#${i}`}>
              {i}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar