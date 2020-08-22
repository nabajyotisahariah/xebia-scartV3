import React from 'react';

function LoginInfo(props) {

    const _UserInfo = () => {
        if (window) {
          if (localStorage.getItem("userInfo") != null && localStorage.getItem("userInfo") != "null") {
            return JSON.parse(localStorage.getItem("userInfo"));
          }
        }
        return null;
    };
    
    const _VerifyIsLogin = () => {
        if (window) {
          if (localStorage.getItem("userInfo") != null && localStorage.getItem("userInfo") != "null") {
            return true;
          }
        }
        return null;
    };

    return [_UserInfo, _VerifyIsLogin];
}

export default LoginInfo;