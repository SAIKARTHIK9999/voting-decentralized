import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion';
import { Navbar, Footer } from '../ts/constant'
import axios from 'axios'
function Registration() {
    let [data, setData] = useState('')
    let bd = new Date("2003-01-01")
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    const onFormSubmit = (info)=> {
        setData([...data, info])
        console.log(data)
        bd = new Date(info.dob)
        validateAge(bd)
        axios.post('http://localhost:4000/user/create-user',info)
        .then(response=>{
            console.log(response);
            alert(response.data.message)
            if (response.data.message === 'New User Created')
            {
              navigate('/biometrics')
            }})
            .catch(error => alert(`error is ${error.message}`))


    }
    const validateAge = (bd)=>{
        const today = new Date()
        const Bdate = new Date(bd)
        const age = today.getFullYear() - Bdate.getFullYear()
        if(age>=18)
        {
            return true
        }
        return false
    }
  return (<>
    <Navbar />
    
    <div className='mt-4'>
    <div className='flex justify-center '>
    <div className=''>
        <div className='max-p-5 text-2xl text-center'>
        <motion.div
      whileInView={{ x: [-500, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >

        <form class="w-full max-w-xl px-16 py-16" onSubmit={handleSubmit(onFormSubmit)}>
        <p className="text-4xl text-center mb-8">Voter registration form</p>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block text-left ml-2  text-gray-700 text-xl font-bold mb-2" for="grid-last-name">
       Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="your name"  name="name" id="1" 
                    {...register("name", {required:true})}/>
                {errors.name?.type ==="required"&&<p className=" border-red-500 text-red-500 text-xs italic">Please fill out this field.</p>}
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block text-left ml-2  text-gray-700 text-xl font-bold mb-2" for="grid-last-name">
       Aadhar number
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="12 digit number"  name="username" id="2" 
                    {...register("username",{required:true, minLength:12, maxLength:12})}
                />
                {errors.username?.type ==="required"&& <p className=" border-red-500 text-red-500 text-xs italic" >*Invalid Aadhar number</p>}
                {errors.username?.type ==="minLength"&& <p className=" border-red-500 text-red-500 text-xs italic" >*Aadhar number is 12 digits</p>}
                {errors.username?.type ==="maxLength"&& <p className=" border-red-500 text-red-500 text-xs italic" >*Aadhar number is 12 digits</p>}

    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block text-left ml-2  text-gray-700 text-xl font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="******************" name="password" id="1" 
                    {...register("password", {required:true, minLength:8})}/>
                {errors.name?.type ==="required"&&<p className=" border-red-500 text-red-500 text-xs italic">*Password is required</p>}
                {errors.password?.type ==="minLength"&& <p className=" border-red-500 text-red-500 text-xs italic">*min 8 characters</p>}
     
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block text-left ml-2  text-gray-700 text-xl font-bold mb-2" for="grid-password">
        Phone
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="10 digit number" name="phoneno" id="3" 
                    {...register("phoneno",{required:true, minLength:10, maxLength:10})}/>
                {errors.phoneno?.type ==="required" && <p className=" border-red-500 text-red-500 text-xs italic">*Invlaid Phone number </p>}
                {errors.phoneno?.type ==="minLength"&& <p className=" border-red-500 text-red-500 text-xs italic">*Phone number is 10 digits</p>}
                {errors.phoneno?.type ==="maxLength"&& <p className=" border-red-500 text-red-500 text-xs italic">*Phone number is 10 digits</p>}
      
    </div>
  </div>


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block text-left ml-2  text-gray-700 text-xl font-bold mb-2" for="grid-password">
        DOB
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="dd/mm/yyyy" type="date" name="dob" id="4" {...register("dob",{required:true, validate: validateAge})}/>
      {errors.dob?.type==="required" && <p className=" border-red-500 text-red-500 text-xs italic">*Invalid Age</p>}
      {errors.dob?.type==="validate" && <p className=" border-red-500 text-red-500 text-xs italic">*Under Age</p>}
    </div>
  </div>

<div className='flex mb-8'>
  <label class="block text-left ml-2  text-gray-700 text-xl font-bold mb-2 mr-4" for="grid-password">
        Gender
      </label>
  <div class="flex items-center mb-4">
  
    <input id="default-radio-1" type="radio" value="" name="male" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    {...register("gender", {required:true})} />

    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>

    <input checked id="default-radio-2" type="radio" value="" name="female" class="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    {...register("gender", {required:true})} />

    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
</div>
{errors.gender?.type==="required"&& <p className='text-red-500'>*Gender required</p>}
</div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        State
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Telangana"  name="state" id="5" 
                    {...register("state", {required:true})}/>
                {errors.state?.type==="required"&& <p className='text-red-500'>*Invalid State</p>}
    </div>

    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        District
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Hyderabad"  name="dis" id="6" 
                    {...register("district",{required:true})}/>
                    
    </div>
    
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        pin code
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  name="pin" placeholder='6 digit number' id="" {...register("pincode",{required:true})} />
                {errors.pincode?.type==="required"&& <p className='text-red-500'>*Invalid Pincode</p>}
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block text-left ml-2  text-gray-700 text-xl font-bold mb-2" for="grid-password">
        Address
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="house number, street number ..."  name="address" id="" 
                    {...register("address",{required:true})}/>
                {errors.address?.type==="required"&& <p className='text-red-500'>*Invalid Address</p>}
      
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
    <p className='m-2 '>Attach Supporting Documents</p>
                <div className='ml-16'>
                    <input type="file" className = '' name="" id=""
                    {...register("docs",{required:true})} />
                </div>
                {errors.docs?.type==="required"&& <p className='text-red-500'>*Attach Document</p>}
    </div>
    </div>

    <div>
    <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                
                  <button type="button" className="text-white bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-indigo-400 dark:hover:bg-indigo-500dark:focus:ring-blue-800">Submit</button>
              </motion.button>
    </div>

</form>
</motion.div>
        </div>
    </div>
    </div>
    </div>
    
    <Footer />
    </>)
}
export default Registration