import { useState } from "react"

const useAuth =()=>{
    const [isLogin , setLogin] = useState(true);
    const handleLogin =()=>{
        if(isLogin){
            setLogin(false);
        }
        else{
            setLogin(true);
        }
    }
    <button onClick={handleLogin}>login</button>
    return isLogin;
}


export default useAuth;