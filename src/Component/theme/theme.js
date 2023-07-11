import {useContext } from "react";
import "./theme.css";
import { ThemeContext } from "../../App";


function Theme ({toggletheme}) {

    const theme =useContext(ThemeContext); 
    
  return (
    
      <div className="but2" id={theme}>
        <button  onClick={toggletheme}>theme</button>
      </div>
 
  )
}

export default Theme;
