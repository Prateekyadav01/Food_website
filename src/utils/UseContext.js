import { createContext } from "react";

const UserContext = createContext({
     user :{
        name:"Prateek Yadav",
        email:"prateeky562@gmail.com",
     }
});


export default UserContext;