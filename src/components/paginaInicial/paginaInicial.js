import React from 'react';
import './paginaInicial.css';
import BarraMenu from '../menu/menu';
import Footer from '../Footer/footer';
import {useState} from 'react';
import {useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../env';
import PieChart from '../graficos/graficoPizza';
import BarChart from '../graficos/graficoBarras';
import LineChart from '../graficos/graficoLinhas';

const PaginaInicial = () => {


    const [graficoOperadora, setGraficoOperadora] = useState();
    const [graficoVelocidade, setgraficoVelocidade] = useState();
    const [graficoAcessos, setgraficoAcessos] = useState();
    useEffect ( () => {
        const fetchData = async () =>{
            const velocidade = collection(db, 'velocidadePorRegiao');
            const SnapshotVelocidade = await getDocs(velocidade);
            let listaOperadora = [];
            let listaVelocidade =[];
            let listaAcessos =[];
            SnapshotVelocidade.forEach(doc => {
                const obj ={mbs: doc.data().mbs,regiao: doc.data().regiao};
                listaVelocidade.push(obj);
            });
            let labelsV = [];
            let dtV = [];
            listaVelocidade.map((data) => {
                labelsV.push(data.regiao);
                dtV.push(data.mbs);
            });
            
            const dV = {
                labels: labelsV,
                datasets: [{
                    label: "Mb/s",
                    data: dtV,
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
            setgraficoVelocidade(dV);
            
            
            const operadoras = collection(db, 'acessoPorOperadoras');
            const SnapshotOperadoras = await getDocs(operadoras);
            SnapshotOperadoras.forEach(doc => {
                const obj2 ={banda_larga: doc.data().banda_larga,
                    celular: doc.data().celular,
                    operadora: doc.data().operadora,
                    telefone_fixo: doc.data().telefone_fixo,
                    tv: doc.data().tv};
                    listaOperadora.push(obj2);
            });
            
            let tf = [];
            let cel = [];
            let bd = [];
            let tv = [];

            listaOperadora.map((data) => {
                tf.push(data.telefone_fixo);
                cel.push(data.celular);
                bd.push(data.banda_larga);
                tv.push(data.tv);
            });
            
            const dO = {
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
            setGraficoOperadora(dO);


            const acessos = collection(db, 'acessosPorEstados');
            const SnapshotAcessos = await getDocs(acessos);
            SnapshotAcessos.forEach(doc => {
                const obj2 ={estado: doc.data().estado,acesso: doc.data().acessos};
                listaAcessos.push(obj2);
            });

            let labelsA = [];
            let dtA = [];

            listaAcessos.map((data) => {
                labelsA.push(data.estado);
                dtA.push(data.acesso);
            });
            
            const dA = { 
                labels: labelsA,
                datasets: [{
                    label: "Acessos x 1000",
                    data: dtA,
                    backgroundColor: [
                        "#ff0000",
                    ],
                    borderColor: "black",
                    borderWidth: 1
                    
                }]
            }
            
            setgraficoAcessos(dA);
            
        }
        fetchData();
        
    },[]);

    return (
        <div className="">  
            <div>
                <BarraMenu classe={1}/>
            </div>
            <h1 className="tituto-inicial">Índices de acesso a internet do País referente a 2021</h1>
            
            <div className="display-graficos">
                
                <div className="grafico-acessos">
                    {graficoAcessos ?  <LineChart chartData={graficoAcessos}/>: null}

                </div>
                <div className="">
                    
                </div>
                <div className="grafico-velocidade">
                    {graficoVelocidade ? <PieChart chartData={graficoVelocidade}/>: null}

                </div>
                <div className="grafico-operadora">
                    {graficoOperadora ? <BarChart chartData={graficoOperadora}/>: null}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default PaginaInicial;