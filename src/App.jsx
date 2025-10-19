import React from "react";
import "./styles/App.css";
// import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import UserPage from "./components/UserPage";
import ModeratorPage from "./components/ModeratorPage";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Router>	

      <Routes>
        {/* ===== Public Routes ===== */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* ===== Protected Routes ===== */}

        {/* Accessible by any logged-in user */}
        <Route element={<RequireAuth allowedRoles={["ROLE_USER", "ROLE_MODERATOR", "ROLE_ADMIN"]} />}>
          <Route path="/user" element={<UserPage />} />
        </Route>

        {/* Accessible by moderators and admins */}
        <Route element={<RequireAuth allowedRoles={["ROLE_MODERATOR", "ROLE_ADMIN"]} />}>
          <Route path="/moderator" element={<ModeratorPage />} />
        </Route>

        {/* Accessible by admins only */}
        <Route element={<RequireAuth allowedRoles={["ROLE_ADMIN"]} />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>

        {/* Default route → Login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
