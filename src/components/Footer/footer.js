import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';


const Footer = () => {
    return (
        <div className="footer">  
            <div>
                <div id='mapa'> Mapa do Site</div>
                <div className="footer-item"><NavLink to="/">Página Inicial</NavLink></div>
                <div className="footer-item"><NavLink to="/velocidadePorRegiao">Velocidade por Região</NavLink></div>
                <div className="footer-item"><NavLink to="/acessoPorEstados">Acessos por Estados</NavLink></div>
            </div>
            <div>
                <div className="placeholder">placeholder</div>
                <div className="footer-item"><NavLink to="/acessosPorOperadoras">Acessos por Operadoras</NavLink></div>
                <div className="footer-item"><NavLink to="/quemSomosNos">Quem Somos Nós</NavLink></div>
                <div className="footer-item"><NavLink to="/faleConosco">Fale Conosco</NavLink></div>
            </div>
            <div>
                <div className="placeholder">placeholder</div>
                <div className="footer-item"><span className="footer-span">Desenvolvido por:</span> Maurílio Santos de Paula Júnior</div>
                <div className="footer-item"><span className="footer-span">Contato:</span> maurilio.junior@aluno.ifsp.edu.br</div>
                <div className="footer-item">Fonte dos dados: www.teleco.com.br</div>
            </div>
            

        </div>
    )
}
export default Footer;