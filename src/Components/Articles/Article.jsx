import React from "react";
import "./Article.css";


function Article({img,text}) {
  return (
    <div className="article_container w-full flex flex-col text-white bg-[#042C54]">
      <div className="article_img ">
        <img src={img} className="w-full h-full flex " alt="" />
      </div>
      <div className="flex flex-col items-start justify-between p-5 h-full ">
        <div className="article_content">
          <p className="article_date my-2">Sep 26, 2021</p>
          <h2 className="article_heading ">
           {text}
          </h2>
        </div>
        <p className="article_footer ">Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
