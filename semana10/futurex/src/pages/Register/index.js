import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './register.css'


function Register(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleRegister = async () => {
      const body = {
        email: email,
        password: password
      };
  
      try {
        const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wellington/signup`, body);
      
      } catch (e) {
        alert("Registro falhou :(");
      }
    };

    return(
        <div>
            <div className="container-register">
            
            <div className="form-register">
            <h1>Register</h1> 
            <input
              value={email}
              placeholder="E-mail"
              onChange={e => setEmail(e.target.value)}
              type="email"
              className="form-field"
            />
            <input
              value={password}
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
              type="password"
              className="form-field"
            />
            
            <button onClick={handleRegister}>Registrar</button>
            <Link to='/'>Login</Link>
            </div>
            </div>
        </div>
    )
}

export default Register