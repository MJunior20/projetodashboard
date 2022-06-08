import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

const BarraMenu = () => {
    return (
       <div className="menu">
           <div className="menu-item"><NavLink to="/">Página Inicial</NavLink></div>
           <div className="menu-item"><NavLink to="/velocidadePorRegiao">Velocidade por Região</NavLink></div>
           <div className="menu-item"><NavLink to="/acessosPorEstado">Acessos por Estado</NavLink></div>
           <div className="menu-item"><NavLink to="/acessosPorOperadoras">Acessos por Operadoras</NavLink></div>
           <div className="menu-item"><NavLink to="/quemSomosNos">Quem somos nós</NavLink></div>
           <div className="menu-item"><NavLink to="/faleConosco">Fale Conosco</NavLink></div>
       </div>
    )
}
export default BarraMenu;