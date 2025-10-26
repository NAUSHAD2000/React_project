import React from 'react'

const UseCallbackChild = React.memo((props) => {

    console.log("Child Component re-rendering again");
  return (
    <div>
      <button>{props.buttonName}</button>
    </div>
  )
}
);

export default UseCallbackChild


// wrap the component in react.memo than component re- render is possible when the props change if not change the props the re- render is not possible
//if you are sending a function then react.memo won't be able to save you from re-rendering 