import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'

import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1, 
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transtion={{ duration: 0.5 }}
        className="app_header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{marginLeft: 20}}>
              <span>👋</span>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Levi</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Digital artist and full stack developer based in France!</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0, 1]}}
        transtion={{ duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src={images.logo} alt="profile_bg" />
        <motion.img
          className="overlay_circle"
          whileInView={{scale: [0, 1]}}
          transtion={{ duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`cirlce-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header