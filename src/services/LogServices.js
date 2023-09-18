const login = (email, password) => {
    if(email === "contact@garoseau.com" && password === "aze"){
        localStorage.setItem("token4234", Math.floor(Math.random()*10000));
        return true;
    }else{
        return false;
    }
}

const checkToken = ()=>{
    const token = localStorage.getItem('token4234');
    if(token){
        return true;
    }else{
        return false;
    }
}

const logout = () =>{
    localStorage.removeItem('token4234');
}

export default {
    login,
    checkToken,
    logout
}