import React from 'react';
import Content from '../components/Content'
import '../components/layout/Menu.css'
import {Link} from 'react-router-dom'
import logo from '../icons8-casa-24.png'
 const Menu = (props) => {
      

    return(
        <div className="Menu">
     
            <nav>
                <ul>
                    <li>
                    <img src={logo} alt="casa" />
                    <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to='/clientes'>Clientes</Link>
                    </li>
                    <li>
                    <Link to='/pedidos'>Pedidos</Link>
                    </li>
                    <li>
                    <Link to='/estoque'>Estoque</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
} 


export default Menu