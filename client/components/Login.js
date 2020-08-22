import React from "react";
import { connect } from "react-redux";
import { loginAction } from "./../redux";
//import common from "./common";
//console.log("como ", common);

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem("userInfo") != null && localStorage.getItem("userInfo") != "null") {
      this.props.history.push("/product");
    }
  };

  //a. Username: amigo |
  //b. Password: delta
  funcLogin = (username, password) => {
    var _that = this;
    this.props.loginTrigger(username, password).then((r) => {         
      if( r.payload != "Login Failed") {      
        _that.props.history.push("/product");
      }
    });
  };

  funcChange = (type, value) => {
    if (type && value) {
      //console.log(" =funcChange== ", type, " ", this.state[type], " == ", value);
      this.setState({ [type]: value });
    }
  };

  render() {

    const { username, password } = this.state;
    const { user, loginTrigger } = this.props;
    //console.log("user ",user)

    return (
      <div className="loginpage">
        <h1>Login page.....11111111</h1>
        <input type="text" name="username" value={username} onChange={(e) => this.funcChange("username", e.target.value)}/>
        {" "}
        <br />
        <input type="password" name="password" value={password} onChange={(e) => this.funcChange("password", e.target.value)}/>
        {" "}
        <br />
        <button onClick={() => this.funcLogin(username, password)}>Login{" "}</button>
        {user.error ? <div style={{"color":"red"}}>Error {user.error}</div>: null}
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    loginTrigger: (username, password) => dispatch(loginAction(username, password)),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(Login);
