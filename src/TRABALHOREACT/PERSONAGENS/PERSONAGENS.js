import React, { useEffect, useState } from 'react';
import PersonagemDetail from './PersonagemDetail/PersonagemDetail'
import './PERSONAGENS.scss'

//useMemo/useCallback

export default function Personagens() {
  // Declare uma nova variável de state, a qual chamaremos de "count"
  const [personagens, setPersonagens] = useState([]);
  const [personagensOriginal, setPersonagensOriginal] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json())
      .then(res => {
        setPersonagens(res.results)
        setPersonagensOriginal(res.results)
      });
  }, []);

  const pesquisar = (texto) => {
    // Executa o setState puxando o ultimo valor salvo no estado
    // setPersonagens((prevState) => {
    //   return prevState.filter(p => p.name.toLowerCase().includes(texto.toLowerCase()))
    // });

    const dadosFiltrados = personagensOriginal.filter(p => p.name.toLowerCase().includes(texto.toLowerCase()));
    setPersonagens(dadosFiltrados);
  }


  // function getPersonagens() {}
  // const getPersonagens = () => { }

  return (
    <div className='boxpesquisa'>
      <label>PESQUISAR</label>
      <input className='designImput' onChange={(e) => pesquisar(e.target.value)} />

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


// export default class Personagens extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       personagens: [],
//       personagensOriginal: []
//     };
//   }

//   componentDidMount() {
//     fetch('https://swapi.dev/api/people/')
//       .then(res => res.json())
//       .then(res => {
//         this.setState({
//           personagens: res.results,
//           personagensOriginal: res.results
//         });
//       });
//   }

//   pesquisar(texto) {
//     const { personagensOriginal } = this.state;
//     const dadosFiltrados = personagensOriginal.filter((personagens) =>
//       (personagens.name.toLowerCase().includes(texto.toLowerCase()))
//     )
//     this.setState({
//       personagens: dadosFiltrados
//     })
//   }

//   render() {
//     const { personagens } = this.state;
//     return (
//       <div className='boxpesquisa'>
//         <label>PESQUISAR</label>
//         <input className='designImput' onChange={(e) => this.pesquisar(e.target.value)} />

//         <h1>Lista de Personagens:</h1>

//         <ul className="personagens">
//           {personagens.map((item) => (
//             <PersonagemDetail
//               key={item.people}
//               personagem={item}
//             />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }