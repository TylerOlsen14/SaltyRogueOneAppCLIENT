import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Address from './components/address/Address'
import Records from './components/records/Records'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Address' exact component={Address} />
          <Route path='/Records' exact component={Records} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
