import React, { createContext, useState } from 'react'
import ChildA from './ChildA'
import '../App.css'


//Step 1 : create context 
//const UserContext = createContext();
//Step 2 : wrap all the child inside a provider <userContext.Provider>Components</usercontext.Provider>
//Step 3 : paas the value in the provider
//Step 4 : Go to consumer and consume the value

const ThemeContext = createContext();
const Parent = () => {
   // const [user , SetUser] = useState({name:"Naushad"});
   const[theme, setTheme] = useState("light")
  return (
    <div>
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div id="container" style={{backgroundColor: theme === "light" ? "red" : "green"}}>

            <ChildA/>
            </div>
        </ThemeContext.Provider>

        {/* <UserContext.Provider value={user}>
            <ChildA />
        </UserContext.Provider> */}
    </div>
  )
}

export default Parent
// export {UserContext}
export{ThemeContext}



// justify-center items-center h-[200] w-[200] flex flex-col border border black