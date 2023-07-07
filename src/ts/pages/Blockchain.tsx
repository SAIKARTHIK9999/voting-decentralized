import React from 'react'
import { Navbar, Footer } from '../constant'

function Blockchain() {
  return (<>
    <Navbar />
    <div className='flex justify-center items-center mx-16 my-16'>
      <a href='http://localhost:3000/'>
      <button type="button" className="text-white bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-indigo-400 dark:hover:bg-indigo-500dark:focus:ring-blue-800">Go to Voting</button>
      </a>
    </div>
    <Footer />
  </>)
}

export default Blockchain