import logo from './logo.svg';
import './App.css';
import './components/mainBg'
import MainBg from './components/mainBg';
import Footer from './components/Footer/footer';
import Header from './components/header';
import BarraMenu from './components/menu/menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <BarraMenu/>
        <Routes>
          <Route path="/" element={<div>Teste path / </div>} />
          <Route path="/rodape" element={<Footer/>} />
        </Routes>
        
        <div><MainBg/></div>
        
        
        </BrowserRouter>
    </div>
  );
}

export default App;
