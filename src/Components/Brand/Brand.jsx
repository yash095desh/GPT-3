import React from 'react'
import { google,shopify,dropbox,slack,atlassian } from './index.js'
import './Brand.css'

function Brand() {
  return (
    <div className="gpt_brand section_padding brand flex justify-center items-center flex-wrap  ">
        <img src={google} alt="" />
        <img src={slack} alt="" />
        <img src={atlassian} alt="" />
        <img src={dropbox} alt="" />
        <img src={shopify} alt="" />
    </div>
  )
}

export default Brand