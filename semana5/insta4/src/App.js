import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    publicacao:[
      {
        nomeUsuario: 'Goli',
        fotoUsuario: 'https://picsum.photos/50/53',
        fotoPost: 'https://picsum.photos/200/153',

        inputUsuario: '',
        inputFoto: '',
        inputPost: ''
      }
    ]
  }

  adicionarPost =()=>{
   const novoPost = {
     nomeUsuario: this.state.inputUsuario,
     fotoUsuario: this.state.inputFoto,
     fotoPost: this.state.inputPost
   };

   const novosPosts = [...this.state.publicacao, novoPost]

   this.setState({ publicacao: novosPosts})
  }

  onChangeInputUsuario = (event) => {
   
    this.setState({ inputUsuario: event.target.value });
  };

  onChangeInputFoto = (event) => {

    this.setState({ InputFoto: event.target.value });
  };

  onChangeInputPost = (event) => {

    this.setState({ InputPost: event.target.value });
  };

  render() {

 

    const listaDePublicacao =  this.state.publicacao.map((pub) =>{
      return(
        <Post
          nomeUsuario={pub.nomeUsuario}
          fotoUsuario={pub.fotoUsuario}
          fotoPost={pub.fotoPost}
        />
      )
    })



    return (

      

      <div className={'app-container'}>
        <div>
          <input
            value={this.state.inputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
          />

            <input
            value={this.state.inputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto de perfil"}
          />

          <input
            value={this.state.inputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Foto post"}
          />

          <button onClick={this.adicionarPost}>Adicionar</button>
        </div>

        <div>{listaDePublicacao}</div>
        
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'joao'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'amanda'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        />

        

        
      </div>
    );
  }
}

export default App;
