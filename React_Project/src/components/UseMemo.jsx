import React from 'react'
import { useMemo, useState } from 'react'


export const UseMemo = () => {
    const [count, setCount] = useState(0);
    const[input, setInput] = useState(0);
 
    function expensiveTask(num){
        console.log("Inside the expensive task");
        for(let i=0;i<1000000000;i++){} 
        return num*2
    }
 
//memoize the input and if we pass the in put calculate and again pass the same value the function cannot call

     //let doubleValue =expensiveTask(4);
    // let doubleValue =expensiveTask(input);
    let doubleValue =useMemo(() => expensiveTask(input), [input]);
   
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
        <div>
            Count: {count}
        </div>
        <input type="number" placeholder='Enter the number' value={input} onChange={(e)=>setInput(e.target.value)} />
        <div>
            Double : {doubleValue}
        </div>
       
    </div>
  )
}


export default UseMemo
