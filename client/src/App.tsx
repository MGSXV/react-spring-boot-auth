import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Home from './components/home/Home'
import HomeMenu from './components/common/HomeMenu'
import Dashboard from './components/dashboard/Dashboard'
import NotFound from './components/NotFound'

function App() {

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />
		}, {
			path: "/login",
			element: <Login />
		}, {
			path: "/register",
			element: <Register />
		}, {
			path: "/dashboard",
			element: <Dashboard />
		}, {
			path: "/*",
			element: <NotFound />
		}
	])

	return (
		<React.Fragment>
			<HomeMenu />
			<RouterProvider router={router} />
		</React.Fragment>
	)
}

export default App
