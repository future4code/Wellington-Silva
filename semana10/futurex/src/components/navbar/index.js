import React from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

export default function navbar(props){
  const handleLogout = () => {
    localStorage.clear();
    alert('deslogado')
  }; 
    return(
        <div className="navbar">
         <ul>
           <li><Link to='/trips'>Viagens</Link></li>
           <li><Link to='/CreateTrip'>Criar Viagem</Link></li>
           <li><Link to='/TripsDetails'>Detalhes das Viagens</Link></li>
           
           <li><Link to='/Candidate'>Candidatar-se</Link></li>

           <button onClick={handleLogout}>Logout</button>
         </ul>
       </div>
    )
}