import React from 'react'
import{ useEffect, useRef, useState } from 'react';

const UseRef = () => {
//   const btnRef = useRef();
 
//   function changeColor() {
//     btnRef.current.style.backgroundColor = "red";
//   }
 
//   return (
//     <div>
//       <button ref={btnRef}>
//         First Button
//       </button>
//       <br />
//       <br />
//       <button onClick={changeColor}>
//         Change the color of 1st button
//       </button>
//     </div>
//   );


//useRef is used to pass the refrence to the another one


 
const [time, setTime] = useState(0);
  let timerRef = useRef(null);
 
  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }
 
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
 
  function resetTimer() {
    stopTimer();
    setTime(0);
  }
 
  return (
    <>
      <h1>Stop Watch : {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );


};

export default UseRef
