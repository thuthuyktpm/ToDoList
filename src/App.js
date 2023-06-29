//import logo from './logo.svg';
import "./App.css";
import Header from "./Component/header/Header";
import Content from "./Component/content/Content";
import Footer from "./Component/footer/Footer";
import { useState } from "react";

//import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [typelist, setTypelist] = useState("");
  const [select, setSelect] = useState();
  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState();
  // console.log(list);

  const handleDelete = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  const handleDoubleClick = (value) => {
    setText(value.content);
    setSelect(value);
  };
  const handleSave = (id) => {
    const newList = [...list];
    const index = newList.findIndex((value) => value.id === id);
    newList[index] = { ...newList[index], content: text };
    setList(newList);
  };

  const handleCheck = (id) => {
    const newList = [...list];
    const index = newList.findIndex((value) => value.id === id);
    newList[index] = {
      ...newList[index],
      isComplete: !newList[index].isComplete,
    };
    setList(newList);
  };

  const handleFix = (value) => {
    selectedValue(value);
  };

  return (
    <div className="body">
      <div className="container">
        <Header
          list={list}
          setList={setList}
          //selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <Content
          list={list}
          setList={setList}
          typelist={typelist}
          select={select}
          text={text}
          setText={setText}
          handleFix={handleFix}
          handleDelete={handleDelete}
          handleDoubleClick={handleDoubleClick}
          handleSave={handleSave}
          handleCheck={handleCheck}
          selectedValue={selectedValue}
        />
        <Footer list={list} setList={setList} setTypelist={setTypelist} />
      </div>
    </div>
  );
}

export default App;

/*luôn luôn chạy
useEffic(func abc(){

})



*/
