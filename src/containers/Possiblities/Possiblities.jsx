import React from 'react'
import './Possiblities.css'
import FeatureImg from '../../assets/FeatureImage.svg'

function Possiblities() {
  return (
    <div className='gpt_possiblities section_padding flex font-[Manrope] ' id='CaseStudy'>
        <div className="possiblities_img flex items-center justify-center flex-1">
            <img src={FeatureImg} alt="" className='w-full'/>
        </div>
        <div className="possiblities_content flex flex-col justify-end flex-[0.9]">
        <p className="content_upper_para text-[16px] text-[#71E5FF] ">Request Early Access to Get Started</p>
        <h1 className='possiblities_content_h1 gradient_text  font-[800]  my-5'>The possibilities are beyond your imagination</h1>
        <p className="content_middle_para text-[#81AFDD] my-5 ">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p className="content_lower_para text-[#FF8A71]">Request Early Access to Get Started</p>
        </div>
    </div>
  )
}

export default Possiblities