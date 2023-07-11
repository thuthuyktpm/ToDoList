//import logo from './logo.svg';
import "./App.css";
import Header from "./Component/header/Header";
import Content from "./Component/content/Content";
import Footer from "./Component/footer/Footer";
import Theme from "./Component/theme/theme";
import { useState, useRef, createContext } from "react";
import Pagination from "./Component/pagination/pagination";

export const ThemeContext = createContext()


function App() {
  const [list, setList] = useState([]);
  const [typelist, setTypelist] = useState("");
  const [select, setSelect] = useState("");
  const headerRef = useRef(null);
  const [theme, setTheme] = useState('light');
  const [currentList,setCurrentList] = useState([]);

  const handleDelete = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
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

  // add todo
  const handleSaveList = (value) => {
    setList([...list, value]);
  };

  // edit todo
  const handleEditList = (value) => {
    headerRef.current(value.content);
    setSelect(value);
  };

  const handleSaveEdit = (item) => {
    const newList = [...list];
    const index = newList.findIndex((value) => value.id === item.id);
    newList[index] = {
      ...newList[index],
      content: item.content,
    };
    setList(newList);
  }
  const toggletheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="body" id={theme}>
        <div className="container ">
          <Header
            headerRef={headerRef}
            list={list}
            setList={setList}
            onSaveList={handleSaveList}
            //editList ={editList}
            select={select}
            setSelect={setSelect}
            handleSaveEdit={handleSaveEdit}
          />
          <Content
            list={currentList}
            setList={setList}
            typelist={typelist}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
            onEditList={handleEditList}

          />
          <Footer list={list} setList={setList} setTypelist={setTypelist} />
          
          <Pagination list={list} setCurrentList={setCurrentList} />
          <Theme toggletheme={toggletheme} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;

/*luôn luôn chạy
useEffic(func abc(){

})



*/
