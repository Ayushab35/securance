import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Dashboard from "./Dasboard"
import Login from "./Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import Policy from "./Policy";
import AbtPol from "./Abt_pol";

function App() {
  return (
    <div>
      <Home />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/policy" element={<Policy />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/abtpol" element={<AbtPol />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
