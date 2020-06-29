import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    background: #efefef;
    width: 60vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    position: relative;
    top: 10vh;
    left: 20vw;
`

const Button = styled.button`
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 18px;
    background: orange;
    color: white;
`

class Home extends React.Component{

    state = {
        atividade: []
    }

    componentDidMount = () =>{
        this.createActive();
    }

    createActive = async () => {
        axios.get("https://www.boredapi.com/api/activity/")
        .then(response => {
            this.setState({ atividade: response.data})
        })
        .catch(err => {
            console.log(err)
        });
    }



    render(){
        return(
            <Container>
        <p>Atividade: {this.state.atividade.activity}</p>

        <p>Acessibilidade: {this.state.atividade.accessibility}</p>

        <p>Tipo: {this.state.atividade.type}</p>

        <p>Participantes necessários:{this.state.atividade.participants} </p>

        <p>Preço: {this.state.atividade.price}</p>

        <Button onClick={this.createActive}>Criar</Button>

        </Container>
        )
    }
}

export default Home