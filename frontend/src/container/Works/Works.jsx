import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './Works.scss'

const Works = () => {
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
    </>
  )
}

export default Works