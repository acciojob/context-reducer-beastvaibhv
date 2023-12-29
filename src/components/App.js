import React, { useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";


const App = () => {
  const [item, setItem] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [isSignIn, setIsSignIn] = useState(false);

  const handleText = (e) => {
    let t = e.target.value;
    setItem(t);
  }
  const data = useContext(UserContext);
  console.log(data);

  const handleClearList = () => {
    setShoppingList([]);
    console.log("clear list")
  };

  const handleAddItem = () => {
    if (item.trim() !== "") {
      setShoppingList((prevItems) => [...prevItems, item])
      
    }
    setItem("")
  };
  console.log(shoppingList);


  const handleLogin = () => {

  };
  const handleSignout = () => {

  };

const handleRemove=()=>{
  
}
  return (
    <UserContext.Provider value={{ isAuthenticated: isSignIn }}>
      <div>
        <div>
          <h2>use context hook</h2>
          <h1>Hello {data.currentUser}</h1>


          <ul style={{ listStyleType: "none" }}>

            {shoppingList.map((item) => (<li id={"item-" + item} key={item}> {item}  {"  "}   <button onClick={handleRemove} id={"remove-" + item}>Remove</button> </li>))}
          </ul>

          <h2>Hi {data.currentUser} again, are you in Agra?</h2>
          <h2>use Reducer Hook</h2>
          <h6>Current user: {data.currentUser}, isAuthenticated: {data.isAuthenticated ? "Yes" : "No"}</h6>
        </div>
        <button id="login-btn" onClick={handleLogin}>Login</button>
        <button id="signout" onClick={handleSignout}>SignOut</button>
        <div>
          <input 
          id="shopping-input" 
          type="text" 
          onChange={handleText} 
          value={item} />

          <button 
          id="add-btn" 
          onClick={handleAddItem}>
            Add
            </button>
        </div>
        <button id="clearlist" onClick={handleClearList}>Clear List</button>
      </div>
    </UserContext.Provider>
  )
}

export default App;
