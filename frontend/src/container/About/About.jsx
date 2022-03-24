import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss'
import { images } from '../../constants'

const profiles = [
  { title: 'Web Development',
    description: 'Junior React Frontend Developer',
    imgUrl: images.about01
  },
  { title: 'Web Design',
    description: 'CSS & Frameworks',
    imgUrl: images.about02
  },
  { title: 'Backend Basics',
    description: 'Node & Sanity, Solidity for Blockchains',
    imgUrl: images.about03
  },
  { title: 'Others',
    description: 'Ready For Challenges',
    imgUrl: images.about04
  },
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that 
        <span>
          Good Design 
        </span>
        <br />
        means
        <span>
          Good Business
        </span>
        <br />
      </h2>

      <div className="app__profiles">
        {profiles.map((profile, i) => {
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={profile.title + i}
          >
            <img src={profile.imgUrl} alt={profile.title}/>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {profile.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {profile.description}
            </p>
          </motion.div>
        })}
      </div>
    </>
  )
}

export default About