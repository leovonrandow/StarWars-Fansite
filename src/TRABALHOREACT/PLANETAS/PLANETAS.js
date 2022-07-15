import React from 'react';
import './PLANETAS.scss'

export default class Planetas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planetas: [],
            planetasOriginal: []
        };
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/planets/')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    planetas: res.results,
                    planetasOriginal: res.results
                });
            });
    }

    pesquisar(texto) {
        const { planetasOriginal} = this.state;
        const dadosFiltrados = planetasOriginal.filter((planetas) =>
           (planetas.name.toLowerCase().includes(texto.toLowerCase()))
        )
        this.setState({
            planetas: dadosFiltrados
        })
    }

    render() {
        const { planetas } = this.state;
        return (
            <div className='boxpesquisa'>

                <label >PESQUISAR</label>
                <input className='designImput' onChange={(e) => this.pesquisar(e.target.value)} />
         

                <h1>Lista de Planetas</h1>

                <ul className="planetas">
                    {planetas.map((item) => (
                        <li key={item.planets}>
                            <p><b>Nome:</b> {item.name}</p>
                            <p><b>Clima:</b> {item.climate}</p>
                            <p><b>Diametro:</b> {item.diameter}</p>
                            <p><b>População:</b> {item.population}</p>
                            <p><b>Gravidade:</b> {item.gravity}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}