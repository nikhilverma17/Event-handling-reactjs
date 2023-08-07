import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [handleOver, setHandleOver] = useState(false)
  const [name,setName]=useState(" ")
  const [newname,setNewName]=useState(" ")


  function handleChange(event){
    setName(event.target.value)
  }
  
  function handleClick(){
    setNewName(name)
  }


  function onOver() {
    setHandleOver(true)
  }

  function onOut() {
    setHandleOver(false)
  }

  return (
    <div className="container">
      <h1>Hello {newname}</h1>
      <input onChange={handleChange} type='text' placeholder='Your Name' />
      <button
        style={{ backgroundColor: handleOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={onOver}
        onMouseOut={onOut}>
        Submit</button>

    </div>
  );
}

export default App;
