import './App.css';
import './components/mainBg'
import MainBg from './components/mainBg';
import Footer from './components/Footer/footer';
import Header from './components/header';
import AcessosEstado from './components/acessosEstado/acessosEstado';
import FaleConosco from './components/faleConosco/faleConosco';
import VelocidadeRegiao from './components/velocidadeRegiao/velocidadePorRegiao';
import AcessosOperadoras from './components/acessosOperadoras/acessosOperadoras';
import PaginaInicial from './components/paginaInicial/paginaInicial';
import QuemSomosNos from './components/quemSomosNos/quemSomosNos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  
  

  return (
    <div>
      <BrowserRouter>
        <Header/>
        
        <Routes>
          <Route path="/" element={<PaginaInicial></PaginaInicial>} />
          <Route path="/acessosPorEstado" element={<AcessosEstado></AcessosEstado>}/>
          <Route path="/faleConosco" element={<FaleConosco></FaleConosco>}/>
          <Route path="/acessosPorOperadoras" element={<AcessosOperadoras></AcessosOperadoras>}/>
          <Route path="/velocidadePorRegiao" element={<VelocidadeRegiao></VelocidadeRegiao>}/>
          <Route path="/quemSomosNos" element={<QuemSomosNos/>}/>
        </Routes>
        
        <div><MainBg/></div>
        
        
        
        </BrowserRouter>
    </div>
  );
}

export default App;
