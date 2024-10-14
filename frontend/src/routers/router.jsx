import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import HomePage from '../pages/home/home'
import CategoryPage from '../pages/category/category'
import SearchPage from '../pages/search/search'
import ShopPage from '../pages/shop/shop'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/categories/:categoryName', element: <CategoryPage /> },
			{ path: '/search', element: <SearchPage /> },
			{ path: '/shop', element: <ShopPage /> },
		],
	},
])

export default router
