import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from './Landing/Landing';
import Shop from './Shop/Shop';
import SingleProduct from "./Shop/SingleProduct/SingleProduct";

export default (
  <Switch>
    <Route component={Landing} exact path="/" />
    <Route component={Shop} path="/shop" />
    <Route component={SingleProduct} path="/singleProduct"/>
  </Switch>
);
