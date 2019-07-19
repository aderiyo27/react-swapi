import React from 'react';
import './App.css';

import Home from './pages/Home';
import Film from './pages/Film';
import Detail from './pages/Detail';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <>  
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/film/' component={Film}/>
      <Route exact path='/film/:slug' component={Detail}/>
      <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
