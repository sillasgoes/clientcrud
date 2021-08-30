import React from 'react';
import PageTitle from '../../src/views/PageTitle';
import './layout/Pedidos.css'


const Pedidos =  (props) => {
   return (
       <div className="princpal">
           <PageTitle title="Pedidos"/>
             <div className="Content_right">
             <table className="table_1">
                 <thead>
                     <tr>
                         <th>Nº Pedido</th>
                         <th>Descrição</th>
                         <th>Data</th>
                         <th>Setor</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>10</td>
                         <td>2 - Armários softbase </td>
                         <td>24/06/2021 - 15:50:34 </td>
                         <td>Vendas</td>
                     </tr>
                 </tbody>
             </table>
             </div>
       </div>
   )
}

export default Pedidos