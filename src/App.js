import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Alert from './Components/Alert';

function App() {
  const [Mode,setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message,type)=>{
setalert({
  Message : message,
  Type : type
})
 setTimeout(() => {
    setalert(null);
 }, 1000);
  }
  const changeMode = ()=>{
      if(Mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor = "black";
        showalert("Dark mode has been enabled","success");
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        showalert("Dark mode has been disabled","success");
      }
  }
  return (
     <>
    <Navbar Mode = {Mode} changeMode = {changeMode}/>
    <div style={{height : "60px"}}>
    <Alert alert={alert}/>
    </div>
    <Body Mode = {Mode} showalert ={showalert}/>
    </>
  );
}

export default App;
