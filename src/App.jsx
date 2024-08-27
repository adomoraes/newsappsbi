// src/App.jsx

import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CategoryPage from "./pages/CategoryPage"
import Welcome from "./pages/Welcome"

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/category/:name' element={<CategoryPage />} />
			</Routes>
		</Router>
	)
}

export default App
