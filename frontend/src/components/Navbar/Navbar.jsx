import React, { useState } from 'react'

import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/Hi'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

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

      <div className="app__navbar-menu">
        <HiMenuAlt4 
          onClick={() => setToggle(true)}
        />
        {
          toggle && (
            <motion.div 
              whileInView={{ x:[300, 0] }} 
              transition={{ duration: 0.85, ease: 'easeOut'}}
            >
              <HiX 
                onClick={() => setToggle(false)}
              />
              <ul>
                {['home', 'about', 'works', 'skills', 'contact'].map((i) => (
                  <li key={i}>
                    <a href={`#${i}`} onClick={() => setToggle(false)}>
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar