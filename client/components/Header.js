import React from "react";
import { connect } from "react-redux";
import { logoutAction, clearCart } from "./../redux";
import Search from "./Search";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  funcLogout = () => {
    this.props.logoutAction();
    this.props.clearCart();
    this.props.history.push("/");
  };

  render() {
    const { user, isLogin, userinfo, productCart } = this.props;

    console.log(" isLogin ", isLogin, " user ", user, " userinfo ", userinfo);
    return (
      <header>
        <div>Logo</div>
        <div style={{"width": "50%"}}><Search/></div>
        {isLogin ? (
          <p>
            {`Welcome ${userinfo.fullName}`} |{" "}
            <button onClick={() => this.funcLogout()}>Logout </button>
          </p>
        ) : (
          "Login"
        )}
        <br/>
        Cart {productCart} item
      </header>
    );
  }
}

const verifyIsLogin = () => {
  if (window) {
    if (localStorage.getItem("userInfo") != null && localStorage.getItem("userInfo") != "null") {
      return true;
    }
  }
  return null;
};

const userInfo = () => {
  if (window) {
    if (localStorage.getItem("userInfo") != null && localStorage.getItem("userInfo") != "null") {
      return JSON.parse(localStorage.getItem("userInfo"));
    }
  }
  return null;
};

const mapsStateToProps = (state) => {
  return {
    user: state.user,
    productCart : state.products.addToCart.length, 
    isLogin: verifyIsLogin(),
    userinfo: userInfo(),
    
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    logoutAction: () => dispatch(logoutAction()),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(Header);
