import React from "react";
import { Provider } from "react-redux";
//import logo from './logo.svg';
import Login from "./components/Login";
import store from "./redux/store";
//import ProductListing from "./components/ProductListing";
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import Footer from "./components/Footer";
import "./App.css";
//import Wrapper from "./components/Wrapper";
import AppRouter from "./AppRouter";

//https://www.tutorialspoint.com/reactjs/reactjs_router.htm
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/*<Router>
          <Route  path="/" component={Wrapper}>
            <Route path="/product" exact component={ProductListing} />
            <Route path="/" exact component={Login} />          
          </Route> 
        </Router>*/}
        <AppRouter/>        
      </div>
    </Provider>
  );
}

export default App;
