import React from 'react'
import {useState} from 'react'
import {useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';
import { Navbar, Footer} from '../ts/constant/index'
import { images } from '../assets/index';
import { useTypewriter, Cursor } from 'react-simple-typewriter'


function HomePage() {
    const [text] = useTypewriter({
        words: [' Blockchain powered voting system.',
                ' Biometrics powered voting system.',                
            ],
        loop: {},
    })
    const [user,setUser] = useState('')
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onFormSubmit = (userObj)=> {
        console.log(userObj)
        setUser([...user, userObj])
        console.log(user)
    }



  return (<>   
  
    <Navbar />
    <div className='bg-white dark:bg-gray-900'>
    <motion.div
      whileInView={{ x: [-500, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
  
    <div className='absolute  ml-64 mt-32 text-left p-4 bg-transparent dark:text-gray-100 text-3xl bold'>
      Welcome to 
      <span>
        {text}
      </span>
      <Cursor />
      <p className='mt-8 text-sm max-w-sm'>To prevent tampering or hacking of votes in server as well as client level we designed a Website which doesn't require server for voting, Powered by Blockchain with MERN stack</p>
    </div>
    

   

    <div className='h-auto max-w-5xl ml-auto '>
      <img className='h-[40rem]' src={images.voting_bg} alt="voting.png" />
    </div>
</motion.div>
</div>
    <Footer />
    </>
)
}

export default HomePage;