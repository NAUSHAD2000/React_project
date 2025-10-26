import React, { useContext } from 'react'
//import { UserContext } from './Parent'
import { ThemeContext } from './Parent';

const ChildC = () => {
    // const user = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
        <button onClick={handleClick}>Change Theme</button>
      {/* {user.name} */}
    </div>
  )
}

export default ChildC
