import React from 'react';
import '../components/layout/Cliente.css'
import logo from '../icons8-pesquisar-24.png'
import PageTitle from '../views/PageTitle';


const Clientes = (props) => {
      return(
            <div className="principal">
              <PageTitle title="Cliente"/>
                 <div className="Content">
                  
                   <input id="input_search"
                    type="text"
                     placeholder="Digite o nome do Cliente" />

                      <table className="table">  
                          <tr className="tr_head">
                             <th>ID</th>
                             <th>Nome</th>
                             <th>Idade</th>
                             <th>Localidade</th>
                             <th>Setor</th>
                          </tr>
                          <tr>
                             <th>1</th>
                             <th>Roberto Silva</th>
                             <th>45</th>
                             <th>São Paulo</th>
                             <th>Alimentos</th>
                          </tr>
                          <tr>
                             <th>2</th>
                             <th>Ricardo Silva</th>
                             <th>24</th>
                             <th>São Paulo</th>
                             <th>Serviços</th>
                          </tr>
                     </table>
                </div>
            </div>
      )
}

export default Clientes