
import './acessosEstado.css';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../env';


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
            console.log(novaLista);
        }
        fetchData();
    },[]);

    

    return (
        <div>  
            <h3>Ranking de acesso a internet por estados em 2021</h3>
            
            <div>
                <img src="https://raw.githubusercontent.com/MJunior20/teste/main/AcessoInternet2021.PNG"/>
            </div>
            

        </div>
    )
}
export default AcessosEstado;