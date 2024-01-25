import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Peter Parker",
    email: "peter@gmail.com",
  },
});

export default UserContext;
