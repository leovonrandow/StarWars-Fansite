import React from 'react'
import './PersonagemDetail.scss'

const PersonagemDetail = ({ personagem }) => {
    return (
        <li className='personagem' key={personagem.name}>
            <p><b>Nome:</b> {personagem.name}</p>
            <p><b>Nascimento:</b> {personagem.birth_year}</p>
            <p><b>Gênero:</b> {personagem.gender}</p>
            <p><b>Cord do Cabelo:</b> {personagem.hair_color}</p>
            <p><b>Altura:</b> {personagem.height}</p>
            <p><b>Cor da pele:</b> {personagem.skin_color}</p>
            <p><b>Cor dos olhos:</b> {personagem.eye_color}</p>
            <p><b>Gênero:</b> {personagem.eye_color}</p>

            {/* {Object.keys(personagem).map(key => {
                return (
                    <p className='atributopersonagem'><b>{key}:</b> {personagem[key]}</p>
                )
            })} */}
        </li>
    )
}

export default PersonagemDetail