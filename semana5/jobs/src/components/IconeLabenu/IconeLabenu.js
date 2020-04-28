import React from 'react';
import './IconeLabenu.css'

function IconeLabenu(props) {
    return (
        <div className="imagem">
            <img src={ props.imagem } />
            <a href='https://www.labenu.com.br/'></a>
        </div>
    )
}

export default IconeLabenu;