import "./velocidadePorRegiao.css"
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../env';
import PieChart from '../graficos/graficoPizza';
import BarraMenu from "../menu/menu";
import Footer from "../Footer/footer";



const VelocidadeRegiao = () => {
    
    const [lista,setLista] = useState([]);
    const [infoGrafico, setInfoGrafico] = useState();
    useEffect ( () => {
        const fetchData = async () =>{
            const acessos = collection(db, 'velocidadePorRegiao');
            const citySnapshot = await getDocs(acessos);
            let novaLista = [...lista];
            citySnapshot.forEach(doc => {
                const obj ={mbs: doc.data().mbs,regiao: doc.data().regiao};
                novaLista.push(obj);
            });
            setLista(novaLista);
            let labels = [];
            let dt = [];

            novaLista.map((data) => {
                labels.push(data.regiao);
                dt.push(data.mbs);
            });
            
            const dd = {
                labels: labels,
                datasets: [{
                    label: "Mb/s",
                    data: dt,
                    backgroundColor: [
                        "#2d35a2",
                        "#0a7929",
                        "#0ed145",
                        "#ffca18",
                        "#00a8f3"
                    ],
                    borderColor: "black",
                    borderWidth: 1
                    
                    
                }]
            }
            console.log("objeto",dd);
            setInfoGrafico(dd);
            
        }
        fetchData();
        
    },[]);

    /*const [infoGrafico, setInfoGrafico] = useState({
        labels: lista.map((data) => data.regiao)["Centro-Oeste","Norte","Sudeste","Nordeste","Sul"],
        datasets: [{
            label: "Mb/s",
            data: lista.map((data) => data.mbs)["64.48","50.04","61.86","50.41","60.15"],
            backgroundColor: [
                "#2d35a2",
                "#0a7929",
                "#0ed145",
                "#ffca18",
                "#00a8f3"
            ],
            borderColor: "black",
            borderWidth: 1
            
            
        }]
    })*/

    return (
        <div id="main">
            <div>
                <BarraMenu classe={2}/>
            </div>
            <h3>Velocidade media por Região</h3>
            <div className="conteudo-velocidade">
                <div className="grafico-velocidade">
                    {infoGrafico ?  <PieChart chartData={infoGrafico}/>: null}
                </div>
                <div className="div-tb-velocidade">
                    <table className="tabela-velocidade">
                        <thead>
                            <th>
                                <div>Mb/s</div>
                            </th>
                            <th>
                                <div>Região</div>
                            </th>
                        </thead>
                        <tbody>
                            {lista.map((linha,index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{linha.mbs}</td>
                                        <td>{linha.regiao}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                


            </div>
            <Footer/>
        </div>
    );

}

export default VelocidadeRegiao;