import { Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';


function App() {

  const green = (e)=>{
    e.preventDefault()
    const body = document.getElementById('bg')
    let color = "green"
    body.style.background = color
  }

  const yellow = (e)=>{
    e.preventDefault()
    const body = document.getElementById('bg')
    let color = "yellow"
    body.style.background = color
  }

  const red = (e)=>{
    e.preventDefault()
    const body = document.getElementById('bg')
    let color = "red"
    body.style.background = color
  }

  const blue = (e)=>{
    e.preventDefault()
    const body = document.getElementById('bg')
    let color = "blue"
    body.style.background = color
  }

  return (
    <div className='bg-black w-screen h-screen flex justify-center items-center'>
      <div id='bg' className='w-3/5 h-3/5 flex justify-center items-center'>
        <Button variant="outline-success" className='me-3 font-extrabold' onClick={(e)=>green(e)}>Green</Button>
        <Button variant="outline-warning" className='me-3 font-extrabold' onClick={(e)=>yellow(e)}>Yellow</Button>
        <Button variant="outline-danger" className='me-3 font-extrabold' onClick={(e)=>red(e)}>Red</Button>
        <Button variant="outline-info" className='font-extrabold' onClick={(e)=>blue(e)}>Blue</Button>
      </div>
    </div>
  );
}

export default App;
