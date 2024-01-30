import React from 'react'
import './WhatGPT3.css'
import Feature from '../../Components/Feature/Feature'

function WhatGPT3() {
  return (
    <div className='whatgpt section_margin mt-[6rem] p-10 ' id='WhatIsGpt'>
        <div className='whatgpt_top flex'>
            <Feature title='What is GPT-3' text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </div>
        <div className="whatgpt_middle gradient_text flex justify-between mt-[4rem] mb-[2rem] font-[Manrope] items-center ">
            <h2 className='font-[800]  ' >The possibilities are beyond your imagination</h2>
            <p>Explore The Library</p>
        </div>
        <div className="whatgpt_bottom flex">
            <Feature title="Chatbots" text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
            <Feature title='Knowledgebase' text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
            <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
        </div>
    </div>
  )
}

export default WhatGPT3