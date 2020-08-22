
const verifyIsLogin = () => {
    if(window) {
        if(localStorage.getItem("userInfo") != null) {
            return true;
        }
        return false;
    }
    
}

const userInfo = () => {
    if(window) {
        if(localStorage.getItem("userInfo") != null) {
            return JSON.parse(localStorage.getItem("userInfo"));
        }
        return false;
    }    
}