import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Dashboard from "./Dasboard"
import Login from "./Login";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import Policy from "./Policy";
import AbtPol from "./Abt_pol";
import FormDataContext from './ContextData';
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fName: "Ayush",
  });
  
  const state = {
    formData: formData,
    setFormData: setFormData
  }

  return (
    <div>
      <Home />
      <FormDataContext.Provider value={state}>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/policy" element={<Policy />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/abtpol" element={<AbtPol />}></Route>
        </Routes>
      </FormDataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
