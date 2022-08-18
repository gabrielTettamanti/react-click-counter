import React from 'react';
import '../stylesheet/Button.css';

function Button({ text, isClickButton, clickManage }) {
  return(
    <button 
      className = { isClickButton ? 'clickButton' : 'resetButton' }
      onClick = { clickManage }
      >
      {text}
    </button>
  );
}

export default Button;