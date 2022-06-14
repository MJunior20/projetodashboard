
import './acessosEstado.css';
import {useState} from 'react';
import {useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../env';


const AcessosEstado = () => {
//const lista = Array();
const [lista,setLista] = useState([]);
    useEffect (async () => {
        //const acessos = collection(db, 'acessosPorEstados');
        //const citySnapshot = await getDocs(acessos);
        //citySnapshot.docs.map(doc => setLista(obj););
       /* citySnapshot.forEach(doc => {
            //console.log(doc.data().estado,",",doc.data().acessos);
            const obj ={estado:doc.data().estado,acesso:doc.data().acessos};
            //lista.push(obj);
            setLista(obj);
            
        });*/
        //console.log(lista);
        //db.collection("acessosPorEstados").getDocs((doc) => console.log(doc.data()));
        
        
    },[])

    return (
        <div className="">  
            <h3>Ranking de acesso a internet por estados em 2021</h3>
            
            <div>
                <img src="https://raw.githubusercontent.com/MJunior20/teste/main/AcessoInternet2021.PNG"/>
            </div>
            

        </div>
    )
}
export default AcessosEstado;