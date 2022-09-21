import { useState } from 'react';
import React from 'react';

function Header (){
  const [textName, settextName] = useState("");
  const [valueNote, setvalueNote] = useState("");
  const [Check, setCheck] = useState("")
  
  const handleInputName = () =>{
    const inputName = document.querySelector(".input-name")
    setTimeout(() => {
      settextName(inputName.value)
    }, 600);
    
  }
  const handleInputNote = () => {
    const inputNote = document.querySelector('.input-note')

    setTimeout(() => {
      setvalueNote(inputNote.value)
    }, 600);
    
  }

window.addEventListener('keypress', (e) =>{
  e.key == "Enter" ? Aval() : false
})
const Aval = () => { 
<>
{
  valueNote >= 5 &&
  setCheck(<h1>Congratulations!!</h1>)
}
</> &&
<>
{
  valueNote < 5 && 
  setCheck(<h1>Study some more...</h1>)
}
</>
}

  return (
<div className="App">
        <h1>Students grades</h1>
        <h2>Insert a name and a grade</h2>
        <h3>Average: 5</h3>
    
        <div className='content-inline'>
        <input typeof="text" placeholder='nome' onChange={handleInputName} className='input-name'></input>
        <input type="number" placeholder='nota' onChange={handleInputNote} className='input-note'></input>
        </div>
        <button onClick={Aval} className='content-button'>Send</button>

{Check}

<div className='content-inline'>
<h1>{textName}</h1>
<h2> = </h2>
<h1>{valueNote}</h1>
</div>

    </div>
  );
}
export default Header