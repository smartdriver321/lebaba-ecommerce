import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import RegisterPage from '../components/register'
import LoginPage from '../components/login'
import HomePage from '../pages/home/home'
import CategoryPage from '../pages/category/category'
import SearchPage from '../pages/search/search'
import ShopPage from '../pages/shop/shop'
import SingleProduct from '../pages/shop/product-details/single-product'
import PaymentSuccess from '../components/payment-success'
import PrivateRoute from './private-route'
import DashboardLayout from '../pages/dashboard/dashboard-layout'

const router = createBrowserRouter([
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
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
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		children: [
			// user dashboard routes
			{ path: '', element: <div>User Dashboard</div> },
		],
	},
])

export default router
