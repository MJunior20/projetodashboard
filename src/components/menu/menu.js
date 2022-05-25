import React from 'react';
import './menu.css';

const BarraMenu = () => {
    return (
       <div className="menu">
           <div className="menu-item">Página Inicial</div>
           <div className="menu-item">Velocidade por Estados</div>
           <div className="menu-item">Acessos por Estado</div>
           <div className="menu-item">Acessos por Operadoras</div>
           <div className="menu-item">Quem somos nós</div>
           <div className="menu-item">Fale Conosco</div>
       </div>
    )
}
export default BarraMenu;