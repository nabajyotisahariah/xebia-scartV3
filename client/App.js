import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import AppRouter from "./AppRouter";

//https://www.tutorialspoint.com/reactjs/reactjs_router.htm
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter/>        
      </div>
    </Provider>
  );
}

export default App;
