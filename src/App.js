import React from 'react'
import {useState} from 'react'
import { useForm } from 'react-hook-form'
import {Routes, Route, Link} from 'react-router-dom'
import img1 from './components/images/img.png'
import RegistrationForm from './components/RegistrationForm'
import HomePage from './components/HomePage'
function App() {
    const [user,setUser] = useState('')
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onFormSubmit = (userObj)=> {
        console.log(userObj)
        setUser([...user, userObj])
        console.log(user)
    }

  return (
    <div className='bg-yellow-50 flex justify-center' >
    <div className='max-w-full'>
    <div className=""> 
    <img src={img1}     class="hidden lg:block max-w-screen max-h-screen object-fit-cover mr-11" alt="" />
    </div>
       
    </div>
    <div className='xl:mx-60 text-center '>
    <p  className="text-2xl xl:text-6xl py-12"> Welcome to Smart Vote</p>
    <p  className="text-md  xl:text-2xl "> "Empower your vote, go digital." </p>
    <div className='bg-secondaryColor shadow-xl rounded-xl mt-20 p-7'>
    <form onSubmit={handleSubmit(onFormSubmit)}>
        <div>
        <p className="text-2xl xl:text-4xl py-12">Enter your Login Credentials</p>      
        </div>
        <div className='grid gap-4'>
        <div>
            <input 
            type="text"
            className='rounded-md bg-transparent border-2 border-black p-1 focus:outline-sky-950  focus:border-stone-50' 
            {...register("username",{required:true, minLength:12, maxLength:12})}
            placeholder='Aadhar number'/>
            {errors.username?.type ==="required"&& <p className='text-red-500'>*Aadhar number required</p>}
            {errors.username?.type ==="minLength"&& <p className='text-red-500'>*Aadhar number is 12 digits</p>}
            {errors.username?.type ==="maxLength"&& <p className='text-red-500'>*Aadhar number is 12 digits</p>}
        </div>
        <div>
            <input type="password" 
            className='rounded-md bg-transparent border-2 border-black p-1 focus:outline-sky-950  focus:border-stone-50' 
            {...register("password",{required:true})}
            placeholder='Password'/>
            {errors.password?.type ==="required" &&<p className='text-red-500'>*Password Requried</p>}
        </div>
        </div>
        <div>
            <button 
            className='border-2 rounded-md border-black mt-7 p-1 mb-5 pl-2 pr-2 bg-primaryButton hover:bg-stone-50 active:bg-sky-600 focus:outline-none focus:ring'
            type='submit' >Login</button>
        </div>
        <div className=''>
        <div className='flex justify-center'>
            <p className='mt-7 p-1 mb-5'>New User? Register</p>
            <Link to='register'>here</Link>
        </div>
    </div>
    </form>
    </div>
    </div>
    <Routes>
        <Route path="/register" element={<RegistrationForm/>}/>
    </Routes>
    </div>
  )
}

export default App;