import React, { useState } from 'react';
import './App.css';
import Main from  './components/Main'
import Matches from './components/Matches';
import axios from 'axios';


export default function App(props) {
  const [usuario, setUsuario] = useState(true)


  const onClickMain = () =>{
    setUsuario(true)
  }

  const onClickMatches= () =>{
    setUsuario(false)
  } 

  const cleanMatches = () =>{
    axios
    .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington/clear')
    .then(response => {
      alert("Lista de Matches foi limpa")
    })
    .catch(err => {
      console.log(err)
    })
  }

  
    if(usuario){
      return(
        <div>
          <Main onClick={onClickMain}></Main>
          <button className='cond' onClick={onClickMatches}>Matches</button>
          <button className='clean' onClick={cleanMatches}>Limpar Matches</button>
        </div>
      )
    }else{
      return(
        <div>
          <Matches onClick={onClickMatches}></Matches>
          <button className='cond' onClick={onClickMain}>Perfis</button>
          <button className='clean' onClick={cleanMatches}>Limpar Matches</button>
      </div>
      )
      
    }
}