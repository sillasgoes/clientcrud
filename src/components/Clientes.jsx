import React from 'react';
import '../components/layout/Cliente.css'
import logo from '../icons8-pesquisar-24.png'

const Clientes = (props) => {
      return(

          <div className="Cliente">
                  <input id="input_search" type="text" placeholder="Digite o nome do Cliente" />
                  <img src={logo} id="img_logo" alt="logo_search"/>
                
                <form id="form-client" action=""> 
                    <label htmlFor=""  >Nome</label>
                    <input type="text" />
                    <label htmlFor=""  >CPF</label>
                    <input type="text" />
                    <label htmlFor="">Idade</label>
                    <input type="text" />
                    <label htmlFor="">Endereço</label>
                    <input type="text" />
                    <label htmlFor="">Nome</label>
                    <input type="text" />

                </form>     
            </div>
      )
}

export default Clientes