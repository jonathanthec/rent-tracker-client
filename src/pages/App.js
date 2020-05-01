import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import Welcome from './Welcome';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Property from './Property';
import AddProperty from './AddProperty';
import EditProperty from './EditProperty';
import DeleteProperty from './DeleteProperty';
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
        <PrivateRoute exact path="/property/:id/edit" {...props} component={EditProperty} />
        <PrivateRoute exact path="/property/:id/delete" {...props} component={DeleteProperty} />
      </Switch>
    </div>
  );
}

export default App;
