import React from 'react'
import {useForm} from 'react-hook-form'
import { useState } from 'react'

function RegistrationForm() {
    let [data, setData] = useState('')
    let bd = new Date("2003-01-01")
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onFormSubmit = (info)=> {
        // console.log(info)
        setData([...data, info])
        console.log(data)
        bd = new Date(info.dob)
        validateAge(bd)
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
  return (
    <div className=''>
    <p className="text-6xl text-center">Registration form</p>
    <div className='flex justify-center '>
    <div className='bg-blue-200  mt-10 border border-none rounded-lg shadow-xl shadow-stone-700 mb-10 '>
        <div className='max-p-5 text-2xl text-center'>
            <form action="" className='' onSubmit={handleSubmit(onFormSubmit)}>
            <div className='p-5'>
                <p className='m-3 font-bold'>Name</p>
                <input type="text rounded-md bg-transparent border-2 p-1 focus:outline-sky-950  focus:border-blue-200" name="name" id="1" 
                    {...register("name", {required:true})}/>
                {errors.name?.type ==="required"&&<p className='text-red-500'>*Name is required</p>}
                
                <p className='m-3 font-bold'>Aadhar Number</p>
                <input type="text rounded-md bg-transparent border-2 p-1 focus:outline-sky-950  focus:border-blue-200" name="aadharno" id="2" 
                    {...register("aadharno",{required:true, minLength:12, maxLength:12})}
                />
                {errors.aadharno?.type ==="required"&& <p className='text-red-500'>*Invalid Aadhar number</p>}
                {errors.aadharno?.type ==="minLength"&& <p className='text-red-500'>*Aadhar number is 12 digits</p>}
                {errors.aadharno?.type ==="maxLength"&& <p className='text-red-500'>*Aadhar number is 12 digits</p>}

                <p className='m-3 font-bold'>Phone Number</p>
                <input type="text rounded-md bg-transparent border-2 p-1 focus:outline-sky-950  focus:border-blue-200" name="phoneno" id="3" 
                    {...register("phoneno",{required:true, minLength:12, maxLength:12})}/>
                {errors.phoneno?.type ==="required" && <p className='text-red-500'>*Invlaid Phone number </p>}
                {errors.phoneno?.type ==="minLength"&& <p className='text-red-500'>*Phone number is 12 digits</p>}
                {errors.phoneno?.type ==="maxLength"&& <p className='text-red-500'>*Phone number is 12 digits</p>}

                <p className='m-3 font-bold'>Date of Birth</p>
                <input type="date" name="dob" id="4" 
                {...register("dob",{required:true, validate: validateAge})}
                />
                {errors.dob?.type==="required" && <p className='text-red-500'>*Invalid Age</p>}
                {errors.dob?.type==="validate" && <p className='text-red-500'>*Under Age</p>}
                <p className='mt-3 mb-2'>Gender</p>
                <div className=''>
                    <div className="form-check mb-1">
                    <label htmlFor="male" >Male</label>
                    <input type="checkbox" name="male" id="" className='ml-3'
                        {...register("gender", {required:true})}
                    />
                    </div>
                    <div className="form-check">
                    <label htmlFor="female">Female</label>
                    <input type="checkbox" name="" id="" className='ml-3'
                        {...register("gender", {required:true})}
                    />
                    </div>
                    {errors.gender?.type==="required"&& <p className='text-red-500'>*Gender required</p>}
                </div>

                <p className='m-3 font-bold'>State</p>
                <input type="text rounded-md bg-transparent border-2 p-1 focus:outline-sky-950  focus:border-blue-200" name="state" id="5" 
                    {...register("state", {required:true})}/>
                {errors.state?.type==="required"&& <p className='text-red-500'>*Invalid State</p>}
                <p className='m-3 font-bold'>District</p>
                <input type="text rounded-md bg-transparent border-2 p-1 focus:outline-sky-950  focus:border-blue-200"name="dis" id="6" 
                    {...register("district",{required:true})}/>
                {errors.district?.type==="required"&& <p className='text-red-500'>*Invalid District</p>}
                <p className='m-3 font-bold'>Pincode</p>
                <input type="text rounded-md bg-transparent border-2 p-1 focus:outline-sky-950  focus:border-blue-200"
                 name="pin" id="" {...register("pincode",{required:true})} />
                {errors.pincode?.type==="required"&& <p className='text-red-500'>*Invalid Pincode</p>}
                <p className='m-3 font-bold'>Address</p>
                <input type="text rounded-md bg-transparent border-2 p-1 focus:outline-sky-950  focus:border-blue-200" name="address" id="" 
                    {...register("address",{required:true})}/>
                {errors.address?.type==="required"&& <p className='text-red-500'>*Invalid Address</p>}
                <p className='m-2 '>Attach Supporting Documents</p>
                <div className='ml-60'>
                    <input type="file" name="" id=""
                    {...register("docs",{required:true})} />
                  
                </div>
                {errors.docs?.type==="required"&& <p className='text-red-500'>*Attach Document</p>}
                <button className='border-4 rounded-md border-black mt-5 px-2 py-1'>
                    Register
                </button>

            </div>
            </form>
        </div>
    </div>
    </div>
    </div>
  )
}
export default RegistrationForm