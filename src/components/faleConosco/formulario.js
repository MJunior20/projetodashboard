import React, { useState } from 'react';
import './formulario.css';


const Formulario = (props) => {

    
    
    const[formValues,setFormValues] = useState({});
    const onSubmitForm = (event) => {
        event.preventDefault(event);
        let formfaleConosco = {
        nome: event.target.nome,
        email: event.target.email,
        assunto: event.target.assunto,
        mensagem: event.target.mensagem
        };

        setFormValues(formfaleConosco);
        console.log(formfaleConosco);
        //db.collection(formfaleConosco.email).add(formFaleConosco);
    }
    const handleChange = (e) => {
        console.log(e);
    }
    return (
        <div>  
            <form className="formulario" onSubmit={onSubmitForm}>
                <div>
                    <label for="nome">Nome :</label>
                </div>
                <div className="formulario-item">
                    <input id="nome" type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <label for="email">Email :</label>
                </div>
                <div className="formulario-item">
                    <input id="email" type="text" onChange={handleChange}/>
                </div> 
                <div>
                    <label for="assunto">Assunto :</label>
                </div> 
                <div className="formulario-item">
                    <input id="assunto" type="text" />
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