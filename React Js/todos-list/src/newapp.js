import React from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";

function App({slides}) {
  const slide = [
    { id:1,
      title:"Today's Workout Plan",
      text:"We're gonna do 3 fundamental exercises"},
      { id:2,
        title:"First 10 push'ups",
        text:"We're gonna do 3 fundamental exercises"},
        { id:2,
          title:"Great job!",
          text:"We're gonna do 3 fundamental exercises"}
  ]
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides slides={slides} />
            </div>
        </div>
    );
}

export default App;