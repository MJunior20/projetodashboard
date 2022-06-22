import React from "react";
import Formulario from "./formulario";
import './faleConosco.css';
import BarraMenu from "../menu/menu";
import Footer from "../Footer/footer";

const FaleConosco = () => {
    return (
        <div>
            <div><BarraMenu classe={6}/></div>
            <div className="fale">
                <div className="titulo"><h2 >Como posso ajudar ?</h2></div>
                <div>Em caso de dúvidas ou sugestões preencha o formulário abaixo.</div>
                <Formulario></Formulario>
            </div>
            <Footer classe={true}/>
        </div>
        
    )
}
export default FaleConosco;