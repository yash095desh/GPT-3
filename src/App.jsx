import React from 'react'
import './App.css'
import {Header,Navbar,CTA,Features,Possiblities,Blog,Footer} from './containers/index'
import Brand from './Components/Brand/Brand'
import WhatGPT3 from './containers/WhatGPT3/WhatGPT3'

function App() {
  return (
   <>
    <div className='gradient_bg'>
    <Navbar/>
    <Header/>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possiblities/>
    <CTA/>
    <Blog/>
    <Footer/>
    </div>
   </>
  )
}

export default App