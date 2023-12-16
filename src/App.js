import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login_component/login";
import SignUp from "./Signup_component/signup";
import Provider_Signup from "./Provider_Signup_component/provider_signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/provider_signup" element={<Provider_Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
