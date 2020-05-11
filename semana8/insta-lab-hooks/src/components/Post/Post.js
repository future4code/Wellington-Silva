import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false)

  const [numeroCurtidas, setNumeroCurtidas] = useState(0)

  const [comentando, setComentando] = useState(false)

  const [numeroComentarios, setNumerosComentarios] = useState(0)

  const [comentarios, setComentarios] = useState(false)

  /* Funções para o useState */
  let iconeCurtida

  if(curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  const onClickCurtida = () => {
    if(curtido){
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
    }else{
      setCurtido(!curtido)
	    setNumeroCurtidas(numeroCurtidas + 1)
    }
  };


  const onClickComentario = () => {
    if(comentarios){
      setComentarios(!comentarios)
      setNumerosComentarios(numeroComentarios - 1)
    }else{
      setComentarios(!comentarios)
      setNumerosComentarios(numeroComentarios + 1)
    }
  };

  const enviarComentario = (comentario) => {
    
  }


  return (
    
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
         icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {enviarComentario}
    </PostContainer>
  )
}

export default Post