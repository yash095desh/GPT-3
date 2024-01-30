import React, { useState } from 'react'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/GPT-3.svg'
import './Navbar.css'
function Navbar() {
  const [toggleMenu,setToggleMenu] = useState(true)
  return (
    <div className='gpt_3_navbar flex px-[6rem] py-[2rem] text-[#fff] items-center justify-between  font-medium text-xs '>
      <div className="navbar_links flex items-center">
        <div className="navbar_links_logo pr-[1.5rem]">
          <img src={logo} alt="logo" className='w-[62px]' />
        </div>
        <div className="navbar_links_container items-center">
         <p><a href="#Home">Home</a></p>
         <p><a href="#WhatIsGpt">What is GPT?</a></p>
         <p><a href="#OpenAI">Open AI</a></p>
         <p><a href="#CaseStudy">Case Studies</a></p>
         <p><a href="#Library">Library</a></p>
        </div>
      </div>
        <div className=" navbar_sign  items-center">
          <p className='mr-4'>Sign In</p>
          <button className='px-8 py-3 bg-[#FF4820] rounded-[5px]'>Sign Up</button>
        </div>
        <div className='relative navbar_menu_container'>
        {toggleMenu?<RiMenu3Line  size={27} onClick={()=>setToggleMenu(false)}/>:<RiCloseLine  size={27} onClick={()=>{setToggleMenu(true)}}/>}
        
        {!toggleMenu?
        <div className="navbar_links_menu_container flex flex-col justify-end items-end absolute top-[40px] right-0 text-xs scale-up-tr">
         <p><a href="#">Home</a></p>
         <p><a href="#">What is GPT?</a></p>
         <p><a href="#">Open AI</a></p>
         <p><a href="#">Case Studies</a></p>
         <p><a href="#">Library</a></p>
         <div className=" navbar_menu_sign  justify-center mx-auto pt-2 items-center">
          <p className='mr-4'>Sign In</p>
          <button className='px-8 py-3 bg-[#FF4820] rounded-[5px]'>Sign Up</button>
        </div>
         </div>
         
         :null}
         </div>
        
    </div>
  )
}

export default Navbar