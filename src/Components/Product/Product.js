import React from 'react'

const Product = ({img, link}) => {
    return (
        <div className="p">
           <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div> 
           </div>
            <a href={link} target="_blank" rel="noopener noreferrer"className="">
                <img className="p-img" src={img} alt="" />
            </a>
             
        </div>
    )
}

export default Product
