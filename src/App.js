//import Ceren from './components/ceren.jsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/home';
// import Details from './pages/details';
// import axios from 'axios';

function App() {
  const dispatch = useDispatch()
 
  const {init} = useSelector(state=>state.change);
  console.log("object",init);
  const getData = () =>{
    dispatch({type:'CHANGE',payload:"deneme"})
  }
  {/* fetch data uygulamsı----
  const[country,setCountry]=useState([])

  useEffect(()=>{
    const getCountry = async() => {
      const data = await axios.get('https://restcountries.com/v3.1/all')
      setCountry(data)
    }
    getCountry()
  },[])

  console.log("country",country)
  */}

  //const deneme = "props mantığını öğrendim."
  
  {/*
  const clickFunc = () => {
    console.log("butona tıkladın")
  }
  */}
{/* todoapp-----
const [text,setText] = useState("")  
const [message,setMessage] = useState([])  

  const onChangeFunc = (e) =>{
    setText(e.target.value)
  }

  const messageFunc = () => {
    setMessage(prev => [...prev,text])
    setText('')
  }

  console.log(message,"message")
*/}

  return (
    
    <>
      {/*
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
      <Ceren props={deneme}/>
      todoapp-----
      <input value={text}
      onChange={onChangeFunc}
       type='text' 
       placeholder='ekle'>
       </input>
      <button 
      onClick={messageFunc}>ekle</button>
      {
        message?.map((msg,i)=>(
          <div key={i}>{msg}</div>
        ))
      }
      */}
      {/* fetch data uygulaması
      {
        country?.data?.map((dt,i)=>(
          <div key={i}>{dt.name.common}</div>
        ))
      }
    */}
    {init}
    <button onClick={getData}>verileri al</button>
    </>
  );
}

export default App;
