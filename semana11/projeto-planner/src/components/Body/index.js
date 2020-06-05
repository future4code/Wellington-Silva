import React, { useState, useEffect } from "react";
import Headers from './components/Header'
import './App.css'
import axios from "axios";

function Body(){ 
  const [toDo, setToDo] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [item, setItem] = useState('')
  const [selectToDo, setSelectToDo] = useState('')
  const [print, setPrint] = useState('')
  
  const handleTextInput = (e)=>{
   setInputValue(e.target.value)
  }

  const alternarItem = (e) =>{
    setItem(e.target.value)
  }

  useEffect(() =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-julian-wellington')
    .then(response =>{
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  useEffect(() =>{
    const body = {
      text: item,
	    day: "Segunda"
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-julian-wellington', body)
    .then(response =>{
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  },[])



  return(
    <div>
      <h1>To do list</h1>
      <label>Tarefa: </label>
      <input onChange={handleTextInput}></input>
      <select value={item} onChange={alternarItem} >
        <option>selecione um dia</option>
        <option value='Segunda'>Segunda-feira</option>
        <option value='Terça' >terça-feira</option>
      </select>
      <button></button>
      <div  className='section'>
        <section value='segunda'>
          <h1>Segunda-feira</h1>
          <p>{item}</p>
        </section>
          

        <section value='terça' >Terça-feira</section>
      </div>
    </div>
  )
}

export default Body