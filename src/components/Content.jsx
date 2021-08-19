import React from 'react';
import '../components/layout/Content.css'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Clientes from './Clientes'
import Pedidos from './Pedidos'
import Estoque from './Estoque'
 

const Content = (props) => {

    return(
        <main className="Content"> 
      
            <Switch>
                <Route exact path='/'>
                    <Home/> 
                 </Route>
                <Route path='/clientes'>
                    <Clientes/> 
                 </Route>
                <Route path='/pedidos'>
                    <Pedidos/>
                 </Route>
                <Route path='/estoque'>  
                <Estoque/>
                </Route>
            </Switch>
        </main>
    )
}


export default Content