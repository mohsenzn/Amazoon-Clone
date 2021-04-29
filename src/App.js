import React,{useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { useStateValue } from "./context/StateProvider";
import {auth} from "./Components/firebase";
import {SET_USER} from './context/reducer';
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect( () => {
   const unscribe= auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type:SET_USER,
          user:authUser
        })
      }else{
        dispatch({
          type:SET_USER,
          user:null
        })
      }
    })

    
      unscribe();
   
  })
  console.log(user)
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/checkout" exact>
            <Header />
            <Checkout/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
