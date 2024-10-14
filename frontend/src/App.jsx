import { Outlet } from 'react-router-dom'
import './App.css'

export default function App() {
	return (
		<>
			<h1 className='text-5xl text-red-700'>Hello World</h1>
			<Outlet />
		</>
	)
}
