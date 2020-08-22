import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import ProductListing from "./hooksComponents/ProductListing";
import Login from "./hooksComponents/Login";

const AppRouter = () => 
    (<Router>
          <Route  path="/" component={Wrapper}>
            <Route path="/product" exact component={ProductListing} />
            <Route path="/" exact component={Login} />          
          </Route>     
    </Router>)

export default AppRouter;