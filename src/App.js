import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
