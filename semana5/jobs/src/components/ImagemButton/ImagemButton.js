import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <a href="#">{ props.texto }</a>
        </div>

    )
}

export default ImagemButton;