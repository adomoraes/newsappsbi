// src/App.jsx

import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"

const App = () => {
	return (
		<Router basename='/newsappsbi/'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/category/:name' element={<CategoryPage />} />
			</Routes>
		</Router>
	)
}

export default App
