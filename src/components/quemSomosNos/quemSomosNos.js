import Footer from "../Footer/footer";
import BarraMenu from "../menu/menu";
import "./quemSomosNos.css"

const QuemSomosNos = () => {
    return (
        <div>
            <div><BarraMenu classe={5}/></div>
            
            <div className="conteudo-info">
            <h3>Quem Somos Nós</h3>
                <div className="info-1">
                    Este site foi criado pelo estudante Maurílio Santos de Paula Júnior, como projeto da matéria Desenvolvimento
                    Web, do curso Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal de São Paulo - Campus Campinas
                </div>
                <div className="info-2">
                    Os dados exibidos nesse site foram retirados do site Teleco Inteligência em Telecomunicações, que é um portal de informações sobre o setor de telecomunicações,
                     criado por profissionais da área.
                    
                </div>
            </div>
            
            <Footer classe={true}/>
        </div>
    );
}

export default QuemSomosNos;