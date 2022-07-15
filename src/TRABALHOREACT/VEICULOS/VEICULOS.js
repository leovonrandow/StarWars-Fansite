import React from 'react';
import './VEICULOS.scss'

export default class Veiculos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            veiculos: [],
            veiculosOriginal: []
        };
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/vehicles/')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    veiculos: res.results,
                    veiculosOriginal: res.results
                });
            });
    }

    pesquisar(texto) {
        const { veiculosOriginal} = this.state;
        const dadosFiltrados = veiculosOriginal.filter((veiculos) =>
           (veiculos.name.toLowerCase().includes(texto.toLowerCase()))
        )
        this.setState({
            veiculos: dadosFiltrados
        })
    }

    render() {
        const { veiculos } = this.state;
        return (
            <div className='boxpesquisa'>

                <label>PESQUISAR</label>
                <input className='designImput' onChange={(e) => this.pesquisar(e.target.value)} />

                <h1>Lista de Veículos</h1>

                <ul className="veiculos">
                    {veiculos.map((item) => (
                        <li key={item.vehicles}>
                            <p><b>Nome:</b> {item.name}</p>
                            <p><b>Modelo:</b> {item.model}</p>
                            <p><b>Classe de veiculo:</b> {item.vehicle_class}</p>
                            <p><b>Fabricante:</b> {item.manufacturer}</p>
                            <p><b>Comprimento:</b> {item.length}</p>
                            <p><b>Equipe:</b> {item.crew}</p>
                            <p><b>Número de passageiros:</b> {item.passengers}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}