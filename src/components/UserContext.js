import React, {createContext} from  "react";

const UserContext = createContext({
    currentUser:"rohan",
    isAuthenticated: false
})
export default UserContext;