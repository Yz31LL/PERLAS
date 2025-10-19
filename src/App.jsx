import React from 'react'
import './styles/App.css'
import Header from './components/header'

function App() {
	return (
		<div id="root">
			<Header />
			<main className="app-main">
				<h1>Welcome</h1>
				<p>Use the header buttons to navigate the app (UI demo).</p>
			</main>
		</div>
	)
}

export default App
