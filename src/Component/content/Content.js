//import { useState } from "react"
import "./content.css"
import View from "../view/View"
//import App from "../../App";

const Content = ({ list,typelist,setList,select,text,setText,handleDelete,handleDoubleClick,handleSave,handleCheck,handleFix,selectedValue}) => {
  //console.log(list)
    return (
        <div className="contain">
            <ul className="contain-ul">
                {list.map((value, index) => {
                    if (typelist === '') {
                      return (
                        <View text={text} setText={setText} select={select} value={value} handleCheck={handleCheck} handleDelete={handleDelete}
                      handleDoubleClick={handleDoubleClick} handleSave={handleSave} handleFix={handleFix} list={list} setList={setList} selectedValue={selectedValue} />
                      )
                    }else if(value.isComplete === typelist){
                      return (
                        <View text={text} setText={setText} select={select} value={value} handleCheck={handleCheck} handleDelete={handleDelete}
                      handleDoubleClick={handleDoubleClick} handleSave={handleSave} handleFix={handleFix} list={list} setList={setList} selectedValue={selectedValue}/>
                      )
                    }
                })}
            </ul>
        </div>
    )
}

export default Content