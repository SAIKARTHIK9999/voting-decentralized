import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
<div className=''>
  <div className='flex justify-center gap-4'>
    <div className='mt-72'>
      <div className='border-4 border-black p-10'>
        <p>
          To vote 
        </p>
        <Link to='' className='hover:text-stone-50'>click here</Link>
      </div>
      <div className='border-4 border-black p-10' style={{ marginTop: '20px' }}>
      <p>
          How to vote 
        </p>
        <Link to='' className='hover:text-stone-50'>click here</Link>
      </div>
    </div>
    <div className='mt-72'>
      <div className='border-4 border-black p-10' style={{ marginBottom: '20px' }}>
      <p>
            See Participants
        </p>
        <Link to='' className='hover:text-stone-50'>click here</Link>
      </div>
      <div className='border-4 border-black p-10'>
      <p>
         To Contact Us
        </p>
        <Link to='' className='hover:text-stone-50'>click here</Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default HomePage