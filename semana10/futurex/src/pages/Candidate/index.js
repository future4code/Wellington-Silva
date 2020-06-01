import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {Link} from 'react-router-dom'

function Candidate(){
    const history = useHistory();

    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        history.push("/");
      }
    }, [history]);

return(
    <div>
        Candidate
        <Link to='/Home'>Home</Link>
    </div>
)

}

export default Candidate