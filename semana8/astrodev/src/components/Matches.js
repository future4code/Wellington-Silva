import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Matches.css'


export default function Matches(props){
    const [user, setUser] = useState([])

    useEffect(()=>{
        axios.
        get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington/matches')
        .then(response =>{
           console.log(response.data.matches)
           setUser(response.data.matches)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])




    return(
        <div className='container'>
            <h3>Lista de Matches</h3>
            {user.map(usuario => {
                return(
                
                <div className='lista'>
                    <img src={usuario.photo}></img>
                    <p>{usuario.name}</p>
                </div>

        )})}
        </div>
    )   
}

