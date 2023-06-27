import React from 'react'
import {useState} from 'react'
import {useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';
import { Navbar, Footer } from '../constants'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


function LoginPage() {
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
      <img className='h-[40rem]' src="https://private-user-images.githubusercontent.com/67945756/249176591-4a9d0f52-1374-4f48-b4d8-cd7badad1657.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg3ODc0NjU3LCJuYmYiOjE2ODc4NzQzNTcsInBhdGgiOiIvNjc5NDU3NTYvMjQ5MTc2NTkxLTRhOWQwZjUyLTEzNzQtNGY0OC1iNGQ4LWNkN2JhZGFkMTY1Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNjI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDYyN1QxMzU5MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yNTM4Zjc4NTgxNjA1YWFmZDdlNjEwOGExMzczMmYzNzMyNWMxMzQ5OWZlMzY1Y2QyNTdjMTJiYWNhMWJkNmMxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.c8DqX1eaogzWur2Mqs-mwCFOwfAlYK9jOTlSZaRdZoM" alt="voting.png" />
    </div>
</motion.div>
</div>
    <Footer />
    </>
)
}

export default LoginPage;