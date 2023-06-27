//import logo from './logo.svg';
import './App.css';
import Header from './Component/header/Header';
import Content from './Component/content/Content';
import Footer from './Component/footer/Footer';
import { useState } from 'react';


//import { useState } from 'react';

function App() {
  
  const [list, setList] = useState([])
  const [typelist, setTypelist] = useState("")
 // console.log(list);
  return (
    <div className='body'>
      <div className='container'>
        <Header setList={setList}/>
        <Content list={list} setList={setList} typelist={typelist}/>
        <Footer list={list} setList={setList} setTypelist={setTypelist}/>
      </div>

    </div>
  );
}


export default App;