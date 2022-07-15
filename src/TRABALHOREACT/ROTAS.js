import { Route, Routes, BrowserRouter } from "react-router-dom";
import Especies from '../TRABALHOREACT/ESPECIES/ESPECIES';
import Personagens from '../TRABALHOREACT/PERSONAGENS/PERSONAGENS';
import Planetas from '../TRABALHOREACT/PLANETAS/PLANETAS';
import Veiculos from '../TRABALHOREACT/VEICULOS/VEICULOS';
import Menu from './MENU/Menu'
import StarWars from "./STARWARS";
import logo from '../images/LOGOSW.png';

function Rotas() {
  return (
    <div className="rotas">
        <div>
        
        </div>

      <BrowserRouter>
      <header className='logo'>
        <img src={logo} alt="" />
      </header>
      <Menu />
      
      <Routes >
      <Route path="/" exact element={<StarWars />} />
      <Route path="/PAGINAINICIAL" element={<StarWars />} />
        <Route path="/ESPECIES" element={<Especies />} />
        <Route path="/PERSONAGENS" element={<Personagens />} />
        <Route path="/PLANETAS" element={<Planetas />} />
        <Route path="/VEICULOS" element={<Veiculos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Rotas;