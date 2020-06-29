import React from 'react'
import {Link} from "react-router-dom"


function CreateTrip(){   
    
   

   

  return (
    <div className='register-container'>
      <div className="container">
        <section>
          <h2>Cadastre uma nova viagem</h2>
          <p>Tem um destino legal e não tem com quem ir,<br></br>
             cadastre aqui e encontre pessoas para desbravar com voce</p>
             <br></br><br></br>
             <Link to='/Home'>Home</Link>
        </section>
        
        <form >
          <input
            type="text"
            placeholder='nome'
             />

          <input
            type="text"
            placeholder='planeta'
            />

          <textarea
            type="text"
            placeholder='description'
            />


          <input
            type="text"
            placeholder='duração'
            />

          <input
            type="text"
            placeholder='dia de partida'
             />


          <button type='submit' >Criar</button>
        </form>
      </div>


    </div>
  )

}

export default CreateTrip