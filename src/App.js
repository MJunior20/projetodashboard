import logo from './logo.svg';
import './App.css';
import './components/mainBg'
import MainBg from './components/mainBg';
import Footer from './components/Footer/footer';
import Header from './components/header';
import BarraMenu from './components/menu/menu';

function App() {
  return (
    <div>
      <Header/>
      <BarraMenu/>
      <div><MainBg/></div>
      <div>Teste</div>
      <Footer/>
    </div>
  );
}

export default App;
