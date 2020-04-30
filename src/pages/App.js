import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import Welcome from './Welcome';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Property from './Property';
import AddProperty from './AddProperty';
import '../styles/App.css';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" {...props} component={Welcome} />
        <Route exact path="/login" {...props} component={Login} />
        <Route exact path="/register" {...props} component={Register} />
        <PrivateRoute exact path="/dashboard" {...props} component={Dashboard} />
        <PrivateRoute exact path="/property/:id" {...props} component={Property} />
        <PrivateRoute exact path="/addproperty" {...props} component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
