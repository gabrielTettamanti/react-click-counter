import './App.css';
import Button from './component/Button';
import Counter from './component/Counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [ clickCount, setClickCount ] = useState(0);

  const clickManage = () => {
    setClickCount(clickCount + 1);
  };

  const countReset = () => {
    setClickCount(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo'
          src={ freeCodeCampLogo }
          alt='freeCodeCamp Logo'
          />
      </div>
      <div className='main-container'>
        <Counter clickCount = { clickCount }/>
        <Button 
          
          text = { 'Click' }
          isClickButton = { true }  
          clickManage = { clickManage }
        />
        <Button 
          text = { 'Reset' }
          isClickButton = { false }  
          clickManage = { countReset }
        />
      </div>
    </div>
  );
};

export default App;
