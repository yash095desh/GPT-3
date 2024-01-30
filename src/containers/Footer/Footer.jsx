import React from 'react'
import './Footer.css'
import logo from '../../assets/GPT-3.svg'
function Footer() {
  return (
    <div className='gpt_footer section_padding bg-[#031B34] font-[Manrope] '>
        <div className="upper_content flex flex-col justify-center items-center  ">
            <h1 className='gradient_text text-center'>Do you want to step in to the future before others</h1>
            <button className='p-5 border-white border text-white mt-10 '>Request Early Access</button>
        </div>
        <div className="lower_content text-white flex justify-between items-start">
            <div className="lower_content_logo mb-10">
                <img src={logo} alt="logo" className='w-[110px] mb-5' />
                <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
            </div>
            <div className="lower_content_info flex  ">
                <div className="lower_content_info_links flex flex-col">
                    <p>Links</p>
                    <p><a href="#Owners">Owners</a></p>
                    <p> <a href="#Social Media">Social Media</a></p>
                    <p><a href="#Counters">Counters</a></p>
                    <p><a href="#Contact">Contact</a></p>
                </div>
                <div className="lower_content_info_company flex flex-col">
                    <p>Company</p>
                    <p><a href="#Terms & Conditions">Terms & Conditions</a></p>
                    <p><a href="#Privacy Policy">Privacy Policy</a></p>
                    <p><a href="#Contact">Contact</a></p>
                </div>
                <div className="lower_content_info_git flex flex-col">
                    <p>Get In touch</p>
                    <p><a href="#address">Crechterwoord K12 <br /> 182 DK Alknjkcb</a></p>
                    <p><a href="#Social Media">085-132567</a></p>
                    <p><a href="#Counters">info@payme.net</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer