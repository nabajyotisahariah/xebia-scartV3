import React from 'react';
import { logoutAction, clearCart } from "./../redux";
import { useSelector, useDispatch } from 'react-redux';
import Search from './Search';
import LoginInfo from './LoginInfo'; 

function Header(props) {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [_UserInfo, _VerifyIsLogin] = LoginInfo();

    const userinfo = _UserInfo();
    const isLogin  = _VerifyIsLogin();
   
    const funcLogout  = () => {
        dispatch(logoutAction());
        dispatch(clearCart());
        props.history.push("/");
    }

    console.log("Header.products ",products)
    console.log("Header.userinfo ",userinfo," isLogin ",isLogin," props ",props)
    return (
      <header>
        <div>Logo</div>
        <div style={{"width": "50%"}}><Search/></div>
        {isLogin ? (
          <p>
            {`Welcome ${userinfo.fullName}`} |{" "}
            <button onClick={() => funcLogout()}>Logout </button>
          </p>
        ) : (
          "Login"
        )}
        <br/>
        {products != null ? `Cart ${products.addToCart.length} item` : null}
      </header>  
    );
}

export default Header;