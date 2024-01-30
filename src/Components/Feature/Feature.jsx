import React from 'react'
import './Feature.css'

function Feature({title,text}) {
  return (
    <div className='feature_container flex text-white w-full justify-between  m-[1rem] items-start'>
        <div className="feature_header flex flex-col flex-1">
        <div className='feature_header_bar'/>
        <h1 className="feature_header_heading  font-[800]  max-w-[170px] ">
            {title}
        </h1>
        </div>
        <div className="feature_content flex flex-2 max-w-[390px] "> 
            <p className='text-[#80AEDD]  font-[500]'>{text}</p>
        </div>
    </div>
  )
}

export default Feature