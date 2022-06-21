import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../env';
import PieChart from '../graficos/graficoPizza';

const VelocidadeRegiao = () => {
    
    const [lista,setLista] = useState([]);
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
            
        }
        fetchData();
        
    },[]);

    const [infoGrafico, setInfoGrafico] = useState({
        labels: lista.map((data) => data.regiao),
        datasets: [{
            label: "Mb/s",
            data: lista.map((data) => data.mbs),
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
    })

    return (
        <div id="main">  
            <h3>Velocidade media por Região</h3>
            <div id="conteudo">
                <div style={{ width: 500 }}>
                    <PieChart chartData={infoGrafico}/>
                </div>
                <div>
                    <table className="tabela">
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

        </div>
    );

}

export default VelocidadeRegiao;