import './App.css';
import React from 'react';
import './App.css'
import ProductData from './ProductData';
function App() {
  const currentHour= new Date().getHours()>9 ? new Date().getHours() : '0' + new Date().getHours();
  const CurrentMinute= new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  return (
    <div className="App">
      <header className='App-header'>
        <nav className='Topbar'>
          <img src="https://play-lh.googleusercontent.com/G7jAks-PRl4d7IkL-s3Ir44nGyPq0Yh872N5UMwZYIJz4wG1Oj0DqoQjsAR5ddKZbQ" alt="Amazon Logo" />
        </nav>
      </header>

      <div className="mainContainer">
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
        <div className="productData">
          <h1 className='fitband'>{ProductData.title}</h1>
          <p className="productDescription">{ProductData.description}</p>


          <div className='images'>
            <h2 className="sectionHeading">Select Color</h2>
            <img className="productImages selectedProductedImage" src="https://imgur.com/iOeUBV7.png" alt="Black color Watch" />
            <img className="productImages" src="https://imgur.com/PTgQlim.png" alt="Red color Watch" />
            <img className="productImages" src="https://imgur.com/Mplj1YR.png" alt="Blue color Watch" />
            <img className="productImages" src="https://imgur.com/xSIK4M8.png" alt="Purple color Watch" />
            <h3 className="sectionHeading">Features</h3>


            <button className="btn-feature selectedProductFeature">Time</button>
            <button className="btn-feature">Heart Rate</button>

          </div>
          <button className="buyButton">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
