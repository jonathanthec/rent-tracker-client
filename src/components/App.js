import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import Welcome from './Welcome';
import Register from './Register';
import Login from './Login/';
import Dashboard from './Dashboard';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
