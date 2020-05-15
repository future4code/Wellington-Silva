import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Main.css'
import likes from '../assets/like.svg'
import dislike from '../assets/dislike.svg'


export default function Main(props){
    const [user, setUser] = useState([])
    const [listaMatch, setListaMatch] = useState(true)
    const [like, setLike] = useState(true)

    useEffect(()=>{
       profile()
    }, [])

    const profile = () => {
        axios.
        get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington/person')
        .then(response =>{
           setUser(response.data.profile)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const lista = () =>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington/matches')
        .then(response => {
            setListaMatch(response.data.match.length)
        })
        .catch(err => {
            console.log(err)
        })
    }

    
    const match = (curtida) =>{
        
        const body = {
            id: user.id,
            choice: curtida
        }
        axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington/choose-person',body,{

        })
        .then(response => {
            console.log(response.data)
        })
        .catch(err =>{
            console.log(err)
        })

        profile()
    }

    return(
        <div container>
            <div className='main-container' key={user.id}>
            <img src={user.photo} className='photo'></img>

            <footer>
                <strong>{user.name}, {user.age}</strong>
                <p>{user.bio}</p>
            </footer>

        <div className='buttons'>
            <button type='button' onClick={() => match(true)}>
            <img src={likes}></img>
         </button>

         <button type='button' onClick={() => match(false)}>
             <img src={dislike}></img>
         </button>
        </div>
            </div>
        </div>
    )   
}

