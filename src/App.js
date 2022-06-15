import './App.css';
import './components/mainBg'
import MainBg from './components/mainBg';
import Footer from './components/Footer/footer';
import Header from './components/header';
import BarraMenu from './components/menu/menu';
import AcessosEstado from './components/acessosEstado/acessosEstado';
import FaleConosco from './components/faleConosco/faleConosco';
import VelocidadeRegiao from './components/velocidadeRegiao/velocidadePorRegiao';
import AcessosOperadoras from './components/acessosOperadoras/acessosOperadoras';
import PaginaInicial from './components/paginaInicial/paginaInicial';
import Formulario from './components/faleConosco/formulario';
import {db} from './components/env';
import {useEffect} from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import React from 'react';
function App() {
  
  
/*useEffect (async () => {
  const acessos = collection(db, 'acessosPorEstados');
  const citySnapshot = await getDocs(acessos);
  citySnapshot.docs.map(doc => console.log(doc.data()));
  //db.collection("acessosPorEstados").getDocs((doc) => console.log(doc.data()));
  
},[])*/

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <BarraMenu/>
        <Routes>
          <Route path="/" element={<PaginaInicial></PaginaInicial>} />
          <Route path="/acessosPorEstado" element={<AcessosEstado></AcessosEstado>}/>
          <Route path="/faleConosco" element={<FaleConosco></FaleConosco>
          }/>
          <Route path="/acessosPorOperadoras" element={<AcessosOperadoras></AcessosOperadoras>}/>
          <Route path="/velocidadePorRegiao" element={<VelocidadeRegiao></VelocidadeRegiao>}/>
        </Routes>
        
        <div><MainBg/></div>
        
        <Footer/>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
