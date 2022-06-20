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
  const [listaAcessosEstados,setListaAcessosEstados] = useState([]);
  const [listaAcessosOperadoras,setListaAcessosOperadoras] = useState([]);
  const [listaVelocidade,setListaVelocidade] = useState([]);
      useEffect ( () => {
        
          const fetchData = async () =>{
            //
            const estados = collection(db, 'acessosPorEstados');
            const SnapshotEstados = await getDocs(estados);
            let novaListaEstados = [...listaAcessosEstados];
            SnapshotEstados.forEach(doc => {
                const obj1 ={estado: doc.data().estado,acesso: doc.data().acessos};
                novaListaEstados.push(obj1);
            });
              //=======================================================//
            const operadoras = collection(db, 'acessoPorOperadoras');
            const SnapshotOperadoras = await getDocs(operadoras);
            let novaListaOperadoras = [...listaAcessosOperadoras];
            SnapshotOperadoras.forEach(doc => {
              const obj2 ={banda_larga: doc.data().banda_larga,
                  celular: doc.data().celular,
                  operadora: doc.data().operadora,
                  telefone_fixo: doc.data().telefone_fixo,
                  tv: doc.data().tv};
                  novaListaOperadoras.push(obj2);
              });
            const velocidade = collection(db, 'velocidadePorRegiao');
            const SnapshotVelocidade = await getDocs(velocidade);
            let novaListaVelocidade = [...listaVelocidade];
            SnapshotVelocidade.forEach(doc => {
                const obj3 ={mbs: doc.data().mbs,regiao: doc.data().regiao};
                novaListaVelocidade.push(obj3);
            });
            setListaAcessosEstados(novaListaEstados);
            setListaAcessosOperadoras(novaListaOperadoras);
            setListaVelocidade(novaListaVelocidade);
            //console.log(novaLista);
          }
          fetchData();
      },[]);

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <BarraMenu/>
        <Routes>
          <Route path="/" element={<PaginaInicial></PaginaInicial>} />
          <Route path="/acessosPorEstado" element={<AcessosEstado lista={listaAcessosEstados}></AcessosEstado>}/>
          <Route path="/faleConosco" element={<FaleConosco></FaleConosco>
          }/>
          <Route path="/acessosPorOperadoras" element={<AcessosOperadoras lista={listaAcessosOperadoras}></AcessosOperadoras>}/>
          <Route path="/velocidadePorRegiao" element={<VelocidadeRegiao lista={listaVelocidade}></VelocidadeRegiao>}/>
        </Routes>
        
        <div><MainBg/></div>
        
        <Footer/>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
