import React from 'react'
import Feature from '../../Components/Feature/Feature'
import './Feature.css'

function Features() {
  const featureData = [
    {
      title:'Improving end distrusts instantly ',
      text : "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
      title:'Become the tended active',
      text : "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
      title:'Message or am nothing ',
      text : "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
      title:'Really boy law county',
      text : "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
    },
  ]
  return (
    <div className='gpt_features flex section_padding' id="OpenAI">
      <div className="features_heading font-[Manrope] gradient_text flex flex-col flex-1 mr-[5rem] items-start justify-start">
        <h1 className=' font-[800] leading-[40px] mb-10'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p className='font-[600] leading-6'>Request Early Access to Get Started</p>
      </div>
      <div className="features_feature  flex flex-1.5 items-start justify-start flex-col">
        {featureData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Features