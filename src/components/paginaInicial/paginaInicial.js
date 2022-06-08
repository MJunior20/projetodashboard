import React from 'react';
import './paginaInicial.css';


const PaginaInicial = () => {
    return (
        <div className="">  
            <h1>Índices de acesso a internet do País referente a 2021</h1>
            
            <div className="display-graficos">
                <div>
                    <img src="https://raw.githubusercontent.com/MJunior20/teste/main/MaiorVelocidadePorEstado.PNG"/>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/MJunior20/teste/main/AcessoInternet2021.PNG"/>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/MJunior20/teste/main/AcessosDeOperadoras.PNG"/>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/MJunior20/teste/main/MediaVelocidadePorRegiao.PNG"/>
                </div>
            </div>
        </div>
    )
}
export default PaginaInicial;