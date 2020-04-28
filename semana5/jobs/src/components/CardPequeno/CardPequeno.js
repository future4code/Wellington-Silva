import React from 'react'
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <a href="https://linkedin.com">{ props.descricao }</a>
            </div>
        </div>
    )
}

export default CardPequeno;