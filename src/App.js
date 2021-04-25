import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Bottomnav from "./components/BottomNav/Bottomnav.component";
import Topnav from "./components/TopNav/Topnav.component";
import Activity from "./pages/Activity";
import Homepage from "./pages/Home";

import './App.css'
import Wallet from './pages/Wallet';
import Market from './pages/Market';
import Earn from './pages/Earn';


function App() {

  const [activeItem, setActiveItem] = useState("Home");

  return (
    <BrowserRouter>
      <div className="App full-page">
        <Topnav />
        <Switch>
          <Route exact path='/' render={(props) => <Homepage {...props} setActiveItem={setActiveItem} />} />
          <Route path='/Activity' render={(props) => <Activity {...props} setActiveItem={setActiveItem} />} />
          <Route path='/Wallet' render={(props) => <Wallet {...props} setActiveItem={setActiveItem} />} />
          <Route path='/Market' render={(props) => <Market {...props} setActiveItem={setActiveItem} />} />
          <Route path='/Earn' render={(props) => <Earn {...props} setActiveItem={setActiveItem} />} />
        </Switch>
        <Bottomnav activeItem={activeItem} />
      </div>
    </BrowserRouter>
  );
}

export default App;
