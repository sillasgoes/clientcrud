import './App.css';
import React from 'react';
import Menu from './components/Menu'
import {BrowserRouter as Router} from 'react-router-dom'
import Content from './components/Content';

function App() {
  return (
        <div className="App">
         <Router>
          <Menu/>
          <Content/>
         </Router>
        </div>
  );
}

export default App;
