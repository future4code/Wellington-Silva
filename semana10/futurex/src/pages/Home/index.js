import React, { useEffect } from "react";
import { useHistory } from "react-router";


import Navbar from '../../components/navbar'

import './home.css'


const Home = () => {
  const history = useHistory();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/");
    }
  }, [history]);
  console.log(localStorage.getItem('token'))
  return (
    
    <div className='home'>
       <Navbar></Navbar>
    </div>
  );
};

export default Home;
