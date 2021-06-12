import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import { reducer, initialState } from "./reducers/userReducer";
import NavBar from "./components/nav";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/home/Profile";
import Posts from "./pages/Posts";

export const UserContext = createContext();


const Routing = () => {
  const history = useHistory();
  const { state,dispatch} = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "USER", payload: user });
      history.push("/");
    } else {
      history.push("/login");
    }
  },[]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/posts" component={Posts} />
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
