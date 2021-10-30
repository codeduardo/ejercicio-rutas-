import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Hero from "./Hero";
import HeroDetail from "./HeroDetail";
import Home from "./Home";

import View from "../layout/View";
import Contact from "./Contact/Contact";
import Detail from "./Detail/Detail";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <View>
        <Switch>
          <Route path="/hero">
            <Hero />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </View>
    </BrowserRouter>
  );
};

export default RouterApp;
