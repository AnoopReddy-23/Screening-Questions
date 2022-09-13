import React from 'react'
import img1 from '../../images/1.svg'

function Home() {

  return (
    <div>
      <div className="text-center m-5 p-5 row">
        <img src={img1} alt="" className='mx-auto d-block w-50 col-6'/>
        <div className="col-6">
          <h3 className='text-warning'>Your response has been submitted Successfully!!</h3>
          <h2 className='text-danger p-2 m-3'>Thankyou!!</h2>
        </div>
      </div>
    </div>
  )
}

export default Home