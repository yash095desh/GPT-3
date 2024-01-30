import React from 'react'
import people from '../../assets/people.png'
import headerImg from '../../assets/headerImg.svg'

import './Header.css'

function Header() {
  return (
    <div className='header flex header_padding  ' id='Home'>
      <div className="header_content  flex-1  m-6">
        <h1 className='header_content_h1  gradient_text font-extrabold  '>
        Let’s Build Something  amazing with GPT-3 OpenAI
        </h1>
        <p className="header_content_p text-[#80AEDD] text-[16px] font-normal mt-10">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="header_content_input flex mt-10">
        <input type="email" placeholder='Your Email Address' className=' bg-[#052D56] rounded-tl-[5px] rounded-bl-[5px] w-full flex-[2]' />
        <button type='button' className='bg-[#FF4820]   rounded-tr-[5px] rounded-br-[5px] text-white text-xl font-[500] w-full flex-[0.7]'>Get Started</button>
        </div>
        <div className="header_content_people  items-center justify-start mt-10">
          <img src={people} alt="people" className='w-[181.79px] h-[38px]' />
          <p className='text-white text-xs font-medium leading-[37.6px] pl-5'>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header_img flex flex-1 flex-col justify-start  items-center">
        <img src={headerImg} alt="" className='w-full'/>
      </div>
    </div>
  )
}

export default Header