import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Index from './views/index' 


function App() {


  return (
    <Router>
        <Switch>
            <Route path="/">
                <div>
                    <Index/>
                </div>
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
