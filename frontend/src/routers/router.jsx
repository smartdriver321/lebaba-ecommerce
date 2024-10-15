import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import HomePage from '../pages/home/home'
import CategoryPage from '../pages/category/category'
import SearchPage from '../pages/search/search'
import ShopPage from '../pages/shop/shop'
import SingleProduct from '../pages/shop/product-details/single-product'
import RegisterPage from '../components/register'
import LoginPage from '../components/login'
import PaymentSuccess from '../components/payment-success'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/categories/:categoryName', element: <CategoryPage /> },
			{ path: '/search', element: <SearchPage /> },
			{ path: '/shop', element: <ShopPage /> },
			{ path: '/shop/:id', element: <SingleProduct /> },
			{
				path: '/success',
				element: <PaymentSuccess />,
			},
		],
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
])

export default router
