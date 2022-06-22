import React, { useState } from 'react';
import './formulario.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../env';
import {useEffect} from 'react';
import { doc, setDoc } from "firebase/firestore";

const Formulario = (props) => {

    
    
    const[formValues,setFormValues] = useState({});
    const onSubmitForm = async (event) => {
        event.preventDefault(event);
        let formfaleConosco = {
        nome: event.target.nome,
        email: event.target.email,
        assunto: event.target.assunto,
        mensagem: event.target.mensagem
        };
        await setDoc(doc(db, 'faleConosco', formfaleConosco.email.value),
        {nome: event.target.nome.value,
            email: event.target.email.value,
            assunto: event.target.assunto.value,
            mensagem: event.target.mensagem.value
           });
        
        console.log("criado");
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
                    <input id="email" type="text" placeholder="Digite seu email" onChange={handleChange}/>
                </div> 
                <div>
                    <label for="assunto">Assunto :</label>
                </div> 
                <div className="formulario-item">
                    <input id="assunto" type="text" placeholder="Digite o assunto" />
                </div> 
                <div>
                    <label for="mensagem">Mensagem :</label>
                </div> 
                <div className="formulario-item">
                    <textarea id="mensagem" placeholder="Comentário ..."></textarea>
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