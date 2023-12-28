import React, { useState, useContext } from "react";
import UserContext from "./UserContext";


const App = () => {
  const [item, setItem] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [isSignIn, setIsSignIn] = useState(false);
  const data = useContext(UserContext);

  const handleClearList = () => {
    setShoppingList([]);
  }
  const handleAddItem = () => {
    setShoppingList((previousList) => [...previousList, item])
  }
  const handleLogin = () => {
    setIsSignIn(true);
  }
  const handleSignout = () => {
    setIsSignIn(false);
  }
  const handleRemoveItem = (value) => {
    const itemName = value.split('-')[1]; 
    
    let newList = shoppingList.filter((item)=>{
      item.id.split('-')[1] !== itemName;
     })
     setShoppingList([newList]);
  }

  return (
    <UserContext.Provider value={{ isAuthenticated: isSignIn }}>
      <div>
        <div>
          <h2>use context hook</h2>
          <h1>Hello {data.currentUser}</h1>
          <ul>{shoppingList.map((item) => {
            <li id={"item-" + item}>{item} <button onClick={handleRemoveItem(id)} id={"remove-"+item}>Remove</button></li>

          })}</ul>

          <h2>Hi {data.currentUser} again, are you in Agra?</h2>
          <h2>use Reducer Hook</h2>
          <h6>Current user: {data.currentUser}, isAuthenticated: {isAuthenticated ? "Yes" : "No"}</h6>
        </div>
        <button id="login-btn" onClick={handleLogin}>Login</button>
        <button id="signout" onClick={handleSignout}>SignOut</button>
        <div><input id="shopping-input" type="text" onChange={(e) => { setItem(e.target.value) }} value={item} /> <button id="add-btn" onClick={handleAddItem}>Add</button></div>
        <button id="clearlist" onClick={handleClearList}>Clear List</button>
      </div>
    </UserContext.Provider>
  )
}

