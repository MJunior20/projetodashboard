import './acessosOperadoras.css';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../env';
import BarChart from '../graficos/graficoBarras';
import BarraMenu from '../menu/menu';
import Footer from "../Footer/footer";



const AcessosOperadoras = () => {
    
    const [lista,setLista] = useState([]);
    const [infoGrafico, setInfoGrafico] = useState();
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

            
            let tf = [];
            let cel = [];
            let bd = [];
            let tv = [];

            novaLista.map((data) => {
                tf.push(data.telefone_fixo);
                cel.push(data.celular);
                bd.push(data.banda_larga);
                tv.push(data.tv);
            });
            
            const dd = {
                labels: ["Claro","Oi","Tim","Vivo"],
                datasets: [
                    {
                    label: "Celulares",
                    data: cel,
                    backgroundColor: [
                        "#f07622"
                    ],
                    borderColor: "black",
                    borderWidth: 1  
                    },
                    {
                        label: "Telefones Fixos",
                        data: tf,
                        backgroundColor: [
                            "#0ed145"
                        ],
                        borderColor: "black",
                        borderWidth: 1  
                    },
                    {
                        label: "Banda Larga",
                        data: bd,
                        backgroundColor: [
                            "#fff200"
                        ],
                        borderColor: "black",
                        borderWidth: 1  
                    },
                    {
                        label: "Tv por Assinatura",
                        data: tv,
                        backgroundColor: [
                            "#ff0000"
                        ],
                        borderColor: "black",
                        borderWidth: 1  
                    }
        
                ]
            }
            console.log("objeto",dd);
            setInfoGrafico(dd);
        }
        fetchData();
    },[]);

    

    return (
        <div id="main">  
            <div><BarraMenu classe={4}/></div>
            <h3>Acessos por Operadoras</h3>
            <div className="conteudo-operadoras">
                <div className="grafico-operadoras">
                    {infoGrafico ? <BarChart chartData={infoGrafico}/> : null}
                    
                </div>
                <div>
                    <table className="tabela-operadoras">
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
            <Footer/>
        </div>
    );

}
export default AcessosOperadoras;