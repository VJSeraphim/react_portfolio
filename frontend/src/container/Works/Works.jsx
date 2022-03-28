import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './Works.scss'

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const handleWorkFilter = (item) => {

  }

  return (
    <>
      <h2 className="head-text">
        <span>
          Projects and Works
        </span>
        <br />
        So Far...
        <br />
      </h2>
      <div className="app__Work-filter">
        {['UI/UX', 'Web Application', 'Mobile Application', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >


          </div>
        ))}
      </div>
    </>
  )
}

export default Works