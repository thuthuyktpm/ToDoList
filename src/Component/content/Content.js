//import { useState } from "react"
import "./content.css"
import View from "../view/View"
//import App from "../../App";

const Content = ({ list,typelist,setList,handleDelete,handleCheck,onEditList}) => {
  const handleEdit =(value) =>{
    onEditList(value)
  }
    return (
        <div className="contain">
            <ul className="contain-ul">
                {list.map((value, index) => {
                    if (typelist === ''|| value.isComplete === typelist) {
                      return (
                        <View value={value} handleCheck={handleCheck} handleDelete={handleDelete}
                       list={list} setList={setList} onEdit={handleEdit}/>
                      )
                    }
                })}
            </ul>
        </div>
    )
}

export default Content