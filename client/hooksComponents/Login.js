import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from "./../redux";

function Login(props) {

    const [username, setUsername]  = useState("");
    const [password, setPassword]  = useState("");

    const user  =  useSelector(state => state.user)
    const dispatch =  useDispatch();

    console.log("Login ",user," userame ",username," passwrd ",password)
    //a. Username: amigo |
    //b. Password: delta
    const funcLogin  = (username, password)  => {
        console.log("username ", username," password ",password, " ",props)
        dispatch(loginAction(username, password)).then((r) => { 
            console.log("username ", username," password ",password," r ",r)        
            if( r.payload != "Login Failed") {      
              props.history.push("/product");
            }
          }); 
    } 
    return (       
        <div className="loginpage">
            <h1>Login Hooks page.....</h1>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            {" "}
            <br />
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            {" "}
            <br />
            <button onClick={() => funcLogin(username, password)}>Login{" "}</button>
            {user.error ? <div style={{"color":"red"}}>Error {user.error}</div>: null}
        </div>
       
    );
}

export default Login;