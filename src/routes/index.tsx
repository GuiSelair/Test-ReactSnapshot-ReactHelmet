import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Users from '../pages/Users';
import User from '../pages/User';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/user/:id" component={User} />
    </Switch>
  );
};

export default Routes;
