import { useState } from "react"
import "./content.css"


const Content = ({ list, setList,typelist }) => {
    
    const [select, setSelect] = useState()
    const [text, setText] = useState('')
    
    const handleDelete = (index) => {
        let newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    } 
    const handleDoubleClick = (value) => {
        setText(value.content)
        setSelect(value)
    }
    const handleSave = (id) => {
        const newList = [...list];
        const index = newList.findIndex(value => value.id === id);
        newList[index] = {...newList[index], content: text};
        setList(newList);
    }
    
    const handleCheck = (id) =>{
        const newList = [...list];
        const index = newList.findIndex(value => value.id === id)
        newList[index] = {...newList[index], isComplete: !newList[index].isComplete} 
        setList(newList)
    }
    return (

        <div className="contain">
            <ul className="contain-ul">
                {list.map((value, index) => {
                    if (typelist === '') {
                        return (
                            <li key={value.id}>
                                {(select === value) ? (
                                    <>
                                        <input className="checkbox" type="checkbox"
                                        checked = {value.isComplete}
                                        onChange={() => handleCheck(value.id)}
                                        />
                                        <input value ={text} onChange={(e) => setText(e.target.value)}/>   
                                        <button className="contain-but" onClick={() => handleSave(value.id)}>Lưu</button>
                                        
                                    </>
                                ) : (
                                    <>
                                        <input className="checkbox" type="checkbox"
                                        checked = {value.isComplete}
                                        onChange={() => handleCheck(value.id)}
                                        />
                                        <div className={value.isComplete ? "completed" : ""} onDoubleClick={() => handleDoubleClick(value)}>{value.content}</div>
                                        <button className="contain-but" onClick={() => handleDelete(value.id)}>Xoá</button>
                                    </>
                                )}
                            </li>
                        )
                    } else if (value.isComplete === typelist) {
                        return (
                            <li key={value.id}>
                                {(select === value) ? (
                                    <>
                                        <input className="checkbox" type="checkbox"
                                        checked = {value.isComplete}
                                        onChange={() => handleCheck(value.id)}
                                        />
                                        <input value ={text} onChange={(e) => setText(e.target.value)}/>   
                                        <button className="contain-but" onClick={() => handleSave(value)}>Lưu</button>
                                        
                                    </>
                                ) : (
                                    <>
                                        <input className="checkbox" type="checkbox"
                                        checked = {value.isComplete}
                                        onChange={() => handleCheck(value.id)}
                                        />
                                        <div className={value.isComplete ? "completed" : ""} onDoubleClick={() => handleDoubleClick(value)}>{value.content}</div>
                                        <button className="contain-but" onClick={() => handleDelete(value)}>Xoá</button>
                                    </>
                                )}
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default Content