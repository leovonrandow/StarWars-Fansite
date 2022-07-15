import React from 'react';
import './ESPECIES.scss'

export default class Especies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            especiesOriginal: [],
            especies: []
        };
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/species/')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    especies: res.results,
                    especiesOriginal: res.results
                });
            });
    }

    pesquisar(texto) {
        const { especiesOriginal} = this.state;
        const dadosFiltrados = especiesOriginal.filter((species) =>
           (species.name.toLowerCase().includes(texto.toLowerCase()))
        )
        this.setState({
            especies: dadosFiltrados
        })
    }


    render() {
        const { especies } = this.state;
        return (
            <div className='boxpesquisa'>               
                <label>PESQUISAR</label>
                <input className='designImput' onChange={(e) => this.pesquisar(e.target.value)} />


                <h1>Lista de Espécies</h1>          
                    <ul className="especies" >
                        {especies.map((item) => (
                            <li className="especie" key={item.species}>
                                <p><b>Nome:</b> {item.name}</p>
                                <p><b>Tipo:</b> {item.classification}</p>
                                <p><b>Designação:</b> {item.designation}</p>
                                <p><b>Altura média:</b> {item.average_height}</p>
                                <p><b>Média de vida:</b> {item.average_lifespan}</p>
                                <p><b>Cor dos olhos:</b> {item.eye_colors}</p>
                                <p><b>Cor do cabelo:</b> {item.hair_colors}</p>
                                <p><b>Cores da pele:</b> {item.skin_colors}</p>
                                <p><b>Lingua:</b> {item.language}</p>
                            </li>
                        ))}
                    </ul>
                

            </div>
        );
    }
}