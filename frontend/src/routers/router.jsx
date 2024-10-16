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
import OrderDetails from '../pages/dashboard/user/order-details'
import PrivateRoute from './private-route'
import DashboardLayout from '../pages/dashboard/dashboard-layout'
import UserDMain from '../pages/dashboard/user/dashboard/user-d-main'
import UserOrders from '../pages/dashboard/user/user-orders'
import UserPayments from '../pages/dashboard/user/user-payments'
import UserReviews from '../pages/dashboard/user/user-reviews'
import UserProfile from '../pages/dashboard/user/user-profile'

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
			{
				path: '/orders/:orderId',
				element: <OrderDetails />,
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
			{ path: '', element: <UserDMain /> },
			{ path: 'orders', element: <UserOrders /> },
			{ path: 'payments', element: <UserPayments /> },
			{ path: 'reviews', element: <UserReviews /> },
			{ path: 'profile', element: <UserProfile /> },
		],
	},
])

export default router
