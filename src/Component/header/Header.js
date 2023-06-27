import "./header.css";
import { useState } from 'react';
import { nanoid } from 'nanoid';
const Header = ({setList}) => {
    
    const [value, setValue] = useState("")
    const handleSave = (value) => {
        setList((prev) => [...prev,value])
        setValue('')
    }
    
    return (
        <div className="wrapper-header">
            <div className="icon">

            </div>
            
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                              
                placeholder="Enter work"
            />
            <button className="header-but" onClick={() => handleSave({id: nanoid(), content: value, isComplete: false})}>Save</button>
        </div>
    )
}
export default Header