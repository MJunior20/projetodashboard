import React from 'react';
import './formulario.css';


const Formulario = (props) => {
    return (
        <div>  
            <form className="formulario" onSubmit={props.onSubmitHandle}>
                <div>
                    <label for="nome">Nome :</label>
                </div>
                <div className="formulario-item">
                    <input id="nome" type="text" name="nome" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <label for="email">Email :</label>
                </div>
                <div className="formulario-item">
                    <input id="email" type="text"/>
                </div> 
                <div>
                    <label for="assunto">Assunto :</label>
                </div> 
                <div className="formulario-item">
                    <input id="assunto" type="text"/>
                </div> 
                <div>
                    <label for="mensagem">Mensagem :</label>
                </div> 
                <div className="formulario-item">
                    <input id="mensagem" type="text"/>
                </div>                
                <div>
                    
                </div>
                <div className='botao'>
                    <button type="submit">Enviar</button>
                </div>
            </form>
           
        </div>
    )
}
export default Formulario;