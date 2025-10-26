import React, { useCallback, useState } from 'react'
import UseCallbackChild from './UseCallbackChild';


export const UseCallback = () => {
    const[count, setCount]= useState(0);
 
    // const handleClick = () =>{ 
    //     setCount(count+1);
    // }
    const handleClick = useCallback(() =>{
        setCount(count+1);
    },[]);

    //useCallback is used to freeze the re rendering child component

  return (
    <div>
        <button>
            Count :{count}
        </button>
 
        <button onClick={handleClick}>
            Increment
        </button>

        <div>
            <UseCallbackChild buttonName ="Click me"/>

        </div>
    </div>
  )
}
 

export default UseCallback
