import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from './Landing/Landing';
import Shop from './Shop/Shop';

export default (
  <Switch>
    <Route component={Landing} exact path="/" />
    <Route component={Shop} path="/shop" />
  </Switch>
);
