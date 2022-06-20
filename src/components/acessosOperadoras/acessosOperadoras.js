import './acessosOperadoras.css';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../env';
import BarChart from '../graficos/graficoBarras';




const AcessosOperadoras = () => {
    
    const [lista,setLista] = useState([]);
    useEffect ( () => {
        const fetchData = async () =>{
            const acessos = collection(db, 'acessoPorOperadoras');
            const citySnapshot = await getDocs(acessos);
            let novaLista = [...lista];
            citySnapshot.forEach(doc => {
                const obj ={banda_larga: doc.data().banda_larga,
                    celular: doc.data().celular,
                    operadora: doc.data().operadora,
                    telefone_fixo: doc.data().telefone_fixo,
                    tv: doc.data().tv};
                novaLista.push(obj);
            });
            setLista(novaLista);
            //console.log(novaLista);
        }
        fetchData();
    },[]);

    const [infoGrafico, setInfoGrafico] = useState({
        labels: /*lista.map((data) => data.operadora)*/["Claro","Oi","Tim","Vivo"],
        datasets: [
            {
            label: "Celulares",
            data: /*lista.map((data) => data.celular)*/[70541,42041,52066,83921],
            backgroundColor: [
                "#f07622"
            ],
            borderColor: "black",
            borderWidth: 1  
            },
            {
                label: "Telefones Fixos",
                data: /*lista.map((data) => data.telefone_fixo)*/[8686,8651,811,7471],
                backgroundColor: [
                    "#0ed145"
                ],
                borderColor: "black",
                borderWidth: 1  
            },
            {
                label: "Banda Larga",
                data: /*lista.map((data) => data.banda_larga)*/[9732,5202,692,6323],
                backgroundColor: [
                    "#fff200"
                ],
                borderColor: "black",
                borderWidth: 1  
            },
            {
                label: "Tv por Assinatura",
                data: /*lista.map((data) => data.tv)*/[6050,1767,0,1115],
                backgroundColor: [
                    "#ff0000"
                ],
                borderColor: "black",
                borderWidth: 1  
            }

        ]
    })

    return (
        <div id="main">  
            <h3>Acessos por Operadoras</h3>
            <div id="conteudo">
                <div style={{ width: 700 }}>
                    <BarChart chartData={infoGrafico}/>
                    
                </div>
                <div>
                    <table className="tabela">
                        <th>
                            <div>Operadoras</div>
                        </th>
                        <th>
                            <div>Celulares</div>
                        </th>
                        <th>
                            <div>Telefones Fixos</div>
                        </th>
                        <th>
                            <div>Banda Larga</div>
                        </th>
                        <th>
                            <div>Tv por Assinatura</div>
                        </th>
                        {lista.map((linha,index) =>{
                            return(
                                <tr key={index}>
                                    <td className="op">{linha.operadora}</td>
                                    <td>{linha.celular}</td>
                                    <td>{linha.telefone_fixo}</td>
                                    <td>{linha.banda_larga}</td>
                                    <td>{linha.tv}</td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>

        </div>
    );

}
export default AcessosOperadoras;