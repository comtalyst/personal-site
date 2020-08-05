import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import customTheme from './CustomTheme.js'
import { ThemeProvider } from '@chakra-ui/core'

import Home from './pages/Home.js';
import GFC from './pages/GFC.js';

function App() {
  const pref = process.env.PUBLIC_URL
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Switch>
          <Route exact path={pref + "/home"} component={Home}/>
          <Route exact path={pref + "/pages/GFC"} component={GFC}/>
          <Route exact path={pref + ["/", "//"]}><Redirect to={pref + "/home"}/></Route>
          <Route component={() => (<span>Page Not Found</span>)}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
