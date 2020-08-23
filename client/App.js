import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import AppRouter from "./AppRouter";

console.log("__BROWSER__ ",__BROWSER__," __PWA_ENV__ ",__PWA_ENV__," __API_URL__ ",__API_URL__); 


//https://www.tutorialspoint.com/reactjs/reactjs_router.htm
//console.log(" process ",process)
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
