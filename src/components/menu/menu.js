import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

const BarraMenu = (props) => {
    return (
       <div className="menu">
           <div className={`menu-item ${props.classe==1 ? 'menu-selecionado' : ''}`}><NavLink to="/">Página Inicial</NavLink></div>
           <div className={`menu-item ${props.classe==2 ? 'menu-selecionado' : ''}`}><NavLink to="/velocidadePorRegiao">Velocidade por Região</NavLink></div>
           <div className={`menu-item ${props.classe==3 ? 'menu-selecionado' : ''}`}><NavLink to="/acessosPorEstado">Acessos por Estado</NavLink></div>
           <div className={`menu-item ${props.classe==4 ? 'menu-selecionado' : ''}`}><NavLink to="/acessosPorOperadoras">Acessos por Operadoras</NavLink></div>
           <div className={`menu-item ${props.classe==5 ? 'menu-selecionado' : ''}`}><NavLink to="/quemSomosNos">Quem somos nós</NavLink></div>
           <div className={`menu-item ${props.classe==6 ? 'menu-selecionado' : ''}`}><NavLink to="/faleConosco">Fale Conosco</NavLink></div>
       </div>
    )
}
export default BarraMenu;