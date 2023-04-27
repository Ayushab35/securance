import React from "react";
import Main from "./Main";
import Dashboard from "./Dasboard"
import Login from "./Login";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import BuyPol from "./BuyPol";
import Policy from "./Policy";
import AbtPol from "./Abt_pol";
import FormDataContext from './ContextData';
import { useState } from "react";
import CyberHome from "./CyberHome";

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
      <FormDataContext.Provider value={state}>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/policy" element={<Policy />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/abtpol" element={<AbtPol />}></Route>
          <Route exact path="/cyber" element={<CyberHome />}></Route>
          <Route exact path="/buypol" element={<BuyPol />}></Route>
        </Routes>
      </FormDataContext.Provider>
    </div>
  );
}

export default App;
