import logo from './logo.svg';
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

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const onSubmitForm = () => {
    console.log("Tem a função de excluir o livro");
    
  }


  return (
    <div>
      <BrowserRouter>
        <Header/>
        <BarraMenu/>
        <Routes>
          <Route path="/" element={<PaginaInicial></PaginaInicial>} />
          <Route path="/acessosPorEstado" element={<AcessosEstado></AcessosEstado>}/>
          <Route path="/faleConosco" element={<FaleConosco onSubmitForm={onSubmitForm()}></FaleConosco>}/>
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
