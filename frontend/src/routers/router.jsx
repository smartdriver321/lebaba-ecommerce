import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <div>HomePage</div>,
			},
			{
				path: '/about',
				element: <div>AboutPage</div>,
			},
		],
	},
])

export default router
