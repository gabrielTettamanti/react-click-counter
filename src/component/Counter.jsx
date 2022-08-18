import React from "react";
import '../stylesheet/Counter.css'

function Counter ({ clickCount }) {
  return (
    <div className="counter">
      { clickCount }
    </div>
  );
}

export default Counter