import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TopMenu from "./pages/TopMenu";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <TopMenu />

      <Route exact path="/about" component={About} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};
export default Routes;
