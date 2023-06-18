import React, { useState } from 'react';

export default function Toggle() {
    const [isToggleOn, setIsToggleOn] = useState(false);
  
    const toggle = () => {
      setIsToggleOn(!isToggleOn);
    };
  
    return (
      <div>
        <button onClick={toggle}>
          {isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
  