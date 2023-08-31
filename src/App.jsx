import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Kog from "./pages/kog";
import Kop from "./pages/kop";
import Admin from "./pages/admin";
import Training from "./pages/training";

function App()  {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/login" Component={Login}></Route>
      <Route path="/signup" Component={SignUp}></Route>
      <Route path="/kog" Component={Kog}></Route>
      <Route path="/kop" Component={Kop}></Route>
      <Route path="/admin" Component={Admin}></Route>
      <Route path="/training" Component={Training}></Route>
    </Routes>
  )
}

export default App