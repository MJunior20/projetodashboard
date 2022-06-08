import React from 'react';


const Row = ({registro}) => {
    const dados = Object.keys(registro)
    return(
        <tr key={registro.id}>
            {dados.map(key => <td key={key}>{registro[key]}</td>)}
        </tr>
    )
    
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
export default Table;