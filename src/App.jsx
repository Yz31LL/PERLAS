import React from 'react'
import './styles/App.css'
import Header from './components/header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';
import ModeratorPage from './components/ModeratorPage';

// function App() {
// 	return (
// 		<div id="root">
// 			<Header />
// 			<main className="app-main">
// 				<h1>Welcome</h1>
// 				<p>Use the header buttons to navigate the app (UI demo).</p>
// 			</main>
// 		</div>
// 	)
// }

function App() {
	return (
    <Router>
      <Routes>

        <Route path="/admin" element={<AdminPage />} />
		<Route path="/user" element={<UserPage />} />
		<Route path="/moderator" element={<ModeratorPage />} />
      </Routes>

      <div>
        <Login />
      </div>
    </Router>
  );
}

export default App
