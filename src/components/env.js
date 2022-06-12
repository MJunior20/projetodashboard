//import firebase from "https://www.gstatic.com/firebasejs/7.23.0/firebase-firestore.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqXZZ1vT2YmUSfSrRUoJWLOMGffpvKNkk",
  authDomain: "projetodashboard-12d3f.firebaseapp.com",
  projectId: "projetodashboard-12d3f",
  storageBucket: "projetodashboard-12d3f.appspot.com",
  messagingSenderId: "845497449788",
  appId: "1:845497449788:web:10c22b08db3e221b2cf239",
  measurementId: "G-LQZP1B9M0G"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


/*==============================================================================================*/

/*function listarAcessos(colecao){
    
    //let user = firebase.auth().currentUser.email;
    let lista = document.createElement('div');
    let linha1 = document.createElement('div');
    let linha2 = document.createElement('div');
    texto1 = document.createElement('h5');
    texto2 = document.createElement('h5');
    texto1.appendChild(document.createTextNode("Operadoras"));
    texto2.appendChild(document.createTextNode("Acessos BL"));
    linha1.appendChild(texto1);
    linha2.appendChild(texto2);
    lista.appendChild(texto1);
    lista.appendChild(texto2);
    
    db.collection(colecao).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            console.log(doc.data().operadora);
            console.log(doc.data().banda_larga);
            lista.appendChild(criaLinha(doc.data().operadora));
            lista.appendChild(criaLinha(doc.data().banda_larga));
        });
        
    });
    return lista;
}



function criaLinha(texto1){
    let linha = document.createElement('div');
    let textos = document.createTextNode(texto1);
    linha.appendChild(textos);
    return linha;
}*/


















function criaLinha(texto1){
    let linha = document.createElement('div');
    let textos = document.createTextNode(texto1);
    linha.appendChild(textos);
    return linha;
}
