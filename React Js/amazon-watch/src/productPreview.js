import React from "react";
import './App.css';
    let productPreview2 = (props) => {
        return(
            <div className="productPreview">
            <img src="https://imgur.com/iOeUBV7.png" alt="ProductPreview" />
            {/* <div className='dateTime'>
              <p >{`${currentHour}:${CurrentMinute}`}</p>
            </div> */}
  
              <div className='HeartBeat'>
              <i class="fa-sharp fa-solid fa-heart-pulse"></i>
              <p >99</p>
            </div>
            </div>
        )
    }
    export default productPreview2;