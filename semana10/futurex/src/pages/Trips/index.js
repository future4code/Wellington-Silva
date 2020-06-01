import React, { useState, useEffect } from 'react'
import {useHistory, Link} from "react-router-dom"
import axios from 'axios'


function Trips(){

  const [trips, setTrips] = useState([])

  useEffect(()=>{
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/wellington/trips')
  .then(response =>{
    setTrips(response.data.trips)
  })
  .catch()
},[])
    const history = useHistory();

    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        history.push("/");
      }
    }, [history]);

return(
    <div>
      <h1>VIAGENS</h1>
       {trips.map((trips) =>{
         return(
           <div key='trips'>
              <p>{trips.planet}</p>
              <p>{trips.name}</p>
              <p>{trips.description}</p>
           </div>
         )
       })}

        <Link to='/Home'>Home</Link>
    </div>
)

}

export default Trips