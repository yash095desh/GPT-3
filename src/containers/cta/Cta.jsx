import React from 'react'
import './Cta.css'

function Cta() {
  return (
    <div className='gpt_cta section_margin flex p-7 rounded-xl font-[Manrope] justify-center items-center  '>
      <div className="cta_content  ">
        <p>Request Early Access to Get Started</p>
        <h1>Register today & start exploring the endless possiblities.Register today & start exploring the endless possiblities.</h1>
      </div>
      
        <button className='cta_join py-3 px-5 min-w-[150px] bg-black text-white rounded-full flex items-center justify-center'> Get Started</button>
      
    </div>
  )
}

export default Cta