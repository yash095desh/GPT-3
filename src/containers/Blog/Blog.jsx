import React from 'react'
import Article from '../../Components/Articles/Article'
import './Blog.css'
import Blog1 from '../../assets/article1.png'
import Blog2 from '../../assets/BlogImg2.png'
import Blog3 from '../../assets/BlogImg3.png'
import Blog4 from '../../assets/BlogImg4.png'
import Blog5 from '../../assets/BlogImg5.png'

function Blog() {
  return (
  <div className="gpt_blog text-white section_padding font-[Manrope]" id='Library'>
     <h1 className='blog_heading font-[Manrope] gradient_text'>A lot is happening, <br /> We are blogging about it.</h1>
    <div className="blog_container flex gap-10 mt-[5rem] ">
        <div className="blog_main_article flex  ">
            <Article img={Blog1} text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="blog_other_articles flex-1 gap-[2rem]">
            <Article img={Blog2} text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article img={Blog3} text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article img={Blog4} text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article img={Blog5} text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
    </div>
  </div>
    )
}

export default Blog