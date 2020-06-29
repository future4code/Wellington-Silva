import React, {useEffect} from 'react'
import {useHistory, Link} from "react-router-dom"

function TripsDetails(){
    const history = useHistory();

    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        history.push("/");
      }
    }, [history]);

return(
    <div>
        TripsDetails
        <Link to='/Home'>Home</Link>
    </div>
)

}

export default TripsDetails