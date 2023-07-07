import React from 'react'
import '@passageidentity/passage-elements/passage-auth'
import { Navbar, Footer } from '../constant'
import { motion } from 'framer-motion'
const Biometrics = () => {
  return (
    <div >
      <Navbar />
      <motion.div
      whileInView={{ x: [-500, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
  <passage-auth app-id="9mvi9J4XZBWRsORb66FeiHxR"></passage-auth>
  </motion.div>
  <Footer />
</div>
  )
}

export default Biometrics