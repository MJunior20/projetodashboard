
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
            
        }
        fetchData();
    },[]);

    const [infoGrafico, setInfoGrafico] = useState({ 
        labels: /*lista.map((data) => data.estado.value)*/["Mato Grosso do Sul","Espírito Santo","Pernambuco",
    "Rio de Janeiro","Piauí","Maranhão","São Paulo","Tocantins","Santa Catarina",
    "Rio Grande do Sul","Distrito Federal","Roraima","Paraná","Amapá","Rondônia","Sergipe",
    "Paraíba","Goías","Alagoas","Mato Grosso","Bahia","Minas Gerais","Ceará","Pará",
    "Rio Grande do Sul","Acre","Amazonas"],
        datasets: [{
            label: "Acessos x 1000",
            data: /*lista.map((data) => data.acesso)*/[498,763,560,3734,354,442,13030,137,2277,615,828,
            81,2900,120,280,331,560,1214,249,646,1682,4462,1396,635,2971,101,446],
            backgroundColor: [
                "#ff0000",
            ],
            borderColor: "black",
            borderWidth: 1
            
        }]
    })

    return (
        <div id="main">  
        <div><BarraMenu classe={3}/></div>
            <h3>Ranking de acesso a internet por estados em 2021</h3>
            <div className="conteudo-acessos">
                <div className="grafico-acessos">
                    <LineChart chartData={infoGrafico}/>
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