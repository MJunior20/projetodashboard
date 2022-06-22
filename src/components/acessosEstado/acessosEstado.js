
import './acessosEstado.css';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../env';
import LineChart from '../graficos/graficoLinhas';
import BarraMenu from '../menu/menu';
import Footer from "../Footer/footer";

const AcessosEstado = () => {
    
    const [lista,setLista] = useState([]);
    const [infoGrafico, setInfoGrafico] = useState();
    useEffect ( () => {
        const fetchData = async () =>{
            const acessos = collection(db, 'acessosPorEstados');
            const citySnapshot = await getDocs(acessos);
            let novaLista = [...lista];
            citySnapshot.forEach(doc => {
                const obj ={estado: doc.data().estado,acesso: doc.data().acessos};
                novaLista.push(obj);
            });
            setLista(novaLista);
            let labels = [];
            let dt = [];

            novaLista.map((data) => {
                labels.push(data.estado);
                dt.push(data.acesso);
            });
            
            const dd = { 
                labels: labels,
                datasets: [{
                    label: "Acessos x 1000",
                    data: dt,
                    backgroundColor: [
                        "#ff0000",
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

/*{infoGrafico ?  <PieChart chartData={infoGrafico}/>: null}*/
    return (
        <div id="main">  
        <div><BarraMenu classe={3}/></div>
            <h3>Ranking de acesso a internet por estados em 2021</h3>
            <div className="conteudo-acessos">
                <div className="grafico-acessos">
                    {infoGrafico ? <LineChart chartData={infoGrafico}/> : null}
                </div>
                <div className="container-tabela">
                    <table className="tabela-acessos">
                        <th>
                            <div>Nro Acessos</div>
                        </th>
                        <th>
                            <div>Estados</div>
                        </th>
                        {lista.map((linha,index) =>{
                            return(
                                <tr key={index}>
                                    <td className="divisao">{linha.acesso}</td>
                                    <td>{linha.estado}</td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
            <Footer/>

        </div>
    )
}
export default AcessosEstado;