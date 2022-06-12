
import './acessosEstado.css';

import {useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../env';


const AcessosEstado = () => {
const lista = Array();
    useEffect (async () => {
        const acessos = collection(db, 'acessosPorEstados');
        const citySnapshot = await getDocs(acessos);
        //citySnapshot.docs.map(doc => console.log(doc.data()));
        citySnapshot.forEach(doc => {
            //console.log(doc.data().estado,",",doc.data().acessos);
            const obj =(doc.data().estado,doc.data().acessos);
            lista.push(obj);
        });
        //console.log(lista);
        //db.collection("acessosPorEstados").getDocs((doc) => console.log(doc.data()));
        
      },[])

    return (
        <div className="">  
            <h3>Ranking de acesso a internet por estados em 2021</h3>
            
            <div>
                <img src="https://raw.githubusercontent.com/MJunior20/teste/main/AcessoInternet2021.PNG"/>
            </div>
            <ul>
                {lista.map((item) => <li key={item.index}>{item}</li>)}
            </ul>

        </div>
    )
}
export default AcessosEstado;