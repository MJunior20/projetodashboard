import './acessosOperadoras.css';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../env';






const AcessosOperadoras = (props) => {
    
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

    

    return (
        <div id="main">  
            <h3>Acessos por Operadoras</h3>
            <div id="conteudo">
                <div>
                    <img src="https://raw.githubusercontent.com/MJunior20/teste/main/AcessosDeOperadoras.PNG"/>
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