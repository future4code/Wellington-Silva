import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">


      <div className="page-section-container">

        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/31947847_2088921687814591_5585216926742740992_n.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_ohc=QF1FYt0tPPoAX_ouG_i&_nc_ht=scontent-gru2-2.xx&oh=e2f2ba4d4e6ad39ab8a19a22cd71d93f&oe=5EBD5F42" 
          nome="Wellington Ap." 
          descricao="Oi, eu sou o Wellington. Sou aluno da Labenu, precisamente da turma Julian. Estou adorando aprender React, praticamente a Labenu está realizando um sonho meu.
          "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.cursou.com.br/wp-content/uploads/2017/11/Curso-de-Desenvolvimento-Web.png" 
          nome="Labenu" 
          descricao="Um jovem gafanhoto na área de desenvolvimento web" 
        />
        
        <CardGrande 
          imagem="https://oguaira.com.br/wp-content/uploads/2019/05/Univesp.jpg" 
          nome="Univesp" 
          descricao="Estudante na area de Engenharia de Computação" 
        />
      </div>

      <div className="page-section-container">
        <h2>Meu Linkedin</h2>
        <CardPequeno 
          imagem="https://imagens.canaltech.com.br/empresas/4142.400.jpg" 
          nome="Visite meu Linkedin" 
          descricao="Clique aqui!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
          link="https://facebook.com"
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
