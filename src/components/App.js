import React ,{useState} from "react";

const App =()=>{
    const [item, setItem] = useState("");
    const [shoppingList, setShoppingList] = useState([]);
    
    const handleClearList=()=>{
        setShoppingList([]);
    }
    const handleAddItem=()=>{

    }
    const handleLogin=()=>{

    }
    const handleSignout=()=>{

    }
    const handleRemoveItem =()=>{
        
    }

    return(
      <div>
        <button id="login-btn" onClick={handleLogin}>Login</button>
        <button id="signout" onClick={handleSignout}>SignOut</button>
        <div><input id="shopping-input" type="text" onChange={(e)=>{setItem(e.target.value)}} value={item}/> <button id="add-btn" onClick={handleAddItem}>Add</button></div>
        <button id="clearlist" onClick={handleClearList}>Clear List</button>
      </div>
    )
}

