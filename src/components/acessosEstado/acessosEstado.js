import React from 'react';
import './acessosEstado.css';

/*const Linha = ({registro}) => {
    const dados = Object.keys(registro)
    return(
        <tr key={registro.id}>
            {dados.map(key => <td key={key}>{registro[key]}</td>)}
        </tr>
    )
    
}

function dados1(){
    const lista = Array();
    db.collection("acessosPorEstado").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            lista.push(doc);
        });
        
    });
    return lista;
}

const Table = ({data}) => {
    const keys = Object.keys(data[0])
    return (
        <table>
            <thead>
                <tr>
                    {keys.map(key => <th key={key}>{key}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(record => <Row record={record}/>)}
            </tbody>
        </table>
    )
}
*/
const AcessosEstado = () => {
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