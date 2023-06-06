import React, {useState} from 'react'

import './App.css';
import Nav from './components/Nav';
import Tweets from './components/Tweets';


function App() {

 const [ counter, setCounter] = useState(0)
  function increment(){
    setCounter((prev) => prev + 1)
  }

 const [toogle, setToogle] = useState(false);
 function toogler(){
  setToogle((prev) => !prev)
 };


  return (
    <div className="App">
      <h1 className={toogle ? "active": ""}>Farid's Tweets</h1>
      <button onClick={toogler} >Toogle</button>
      <div className='home'>
        <Nav toggle={toogler}/>
        <Tweets nr={counter} setToogle={toogler}/>
        <h2>Counter {counter}</h2>
      <button onClick={increment}>Inc</button>
      </div>
      
    </div>
  );
}

export default App;
