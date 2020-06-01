import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import './login.css'

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/wellington";

export default function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${baseUrl}/login`, body);

      localStorage.setItem("token", response.data.token);
      history.push("/home");
    } catch (e) {
      alert("Login falhou :(");
    }
  };


  return (
    <div>
      <div className="container-login">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Bem Vindo</h2>
            <h4 className="animation a2">Faça Login com sua conta</h4>
          </div>

          <div className="form">
            <input
              value={email}
              placeholder="E-mail"
              onChange={e => setEmail(e.target.value)}
              type="email"
              className="form-field animation a3"
            />
            <input
              value={password}
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
              type="password"
              className="form-field animation a4"
            />
            
            <button onClick={handleLogin}>Login</button>

            <p><Link to='/register' className="link">Criar uma conta</Link></p>
           
          </div>
        </div>

        <div className="right"></div>
      </div>
     
    </div>
  );
};