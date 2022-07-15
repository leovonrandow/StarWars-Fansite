import React from 'react';
import PersonagemDetail from './PersonagemDetail/PersonagemDetail'
import './PERSONAGENS.scss'

export default class Personagens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personagens: [],
            personagensOriginal: []
        };
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/people/')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    personagens: res.results,
                    personagensOriginal: res.results
                });
            });
    }

    pesquisar(texto) {
        const { personagensOriginal} = this.state;
        const dadosFiltrados = personagensOriginal.filter((personagens) =>
           (personagens.name.toLowerCase().includes(texto.toLowerCase()))
        )
        this.setState({
            personagens: dadosFiltrados
        })
    }

    render() {
        const { personagens } = this.state;
        return (
            <div className='boxpesquisa'>
                <label>PESQUISAR</label>
                <input className='designImput' onChange={(e) => this.pesquisar(e.target.value)} />
   
                <h1>Lista de Personagens:</h1>

                <ul className="personagens">
                    {personagens.map((item) => (
                        <PersonagemDetail
                            key={item.people}
                            personagem={item}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}