import React from 'react';
import  "./menu-item.styles.scss";
const MenuItem = ({title,imgurl,Size}) =>(
    
   <div className = {`${Size} menu-item`}>
      <div className='background-image' style={{backgroundImage:`url(${imgurl})`}}/>
        <div className="content">
          {console.log(imgurl)}
          <h1 className ="title">{title.toUpperCase()}</h1>
          <span className ="subtitle">Shop Now</span>
        </div>
    </div> 
);
export default MenuItem;