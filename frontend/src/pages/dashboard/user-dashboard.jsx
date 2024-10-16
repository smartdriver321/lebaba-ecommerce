import { useDispatch } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { logout } from '../../redux/features/auth/authSlice'
import { useLogoutUserMutation } from '../../redux/features/auth/authApi'

const navItems = [
	{ path: '/dashboard', label: 'Dashboard' },
	{ path: '/dashboard/orders', label: 'Order' },
	{ path: '/dashboard/payments', label: 'Payments' },
	{ path: '/dashboard/profile', label: 'Profile' },
	{ path: '/dashboard/reviews', label: 'Reviews' },
]

export default function UserDashboard() {
	const [logoutUser] = useLogoutUserMutation()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogout = async () => {
		try {
			await logoutUser().unwrap()
			dispatch(logout())
			navigate('/')
		} catch (error) {
			console.error('Failed to log out', error)
		}
	}
	return (
		<div className='space-y-5 bg-white p-8 md:h-screen flex flex-col justify-between'>
			<div>
				<div className='nav__logo'>
					<Link to='/'>
						Lebaba<span>.</span>
					</Link>
					<p className='text-xs italic'>User dashboard</p>
				</div>
				<hr className='mt-5' />
				<ul className='space-y-5 pt-5'>
					{navItems.map((item) => (
						<li key={item.path}>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'text-blue-600 font-bold' : 'text-black'
								}
								end
								to={item.path}
							>
								{item.label}
							</NavLink>
						</li>
					))}
				</ul>
			</div>

			<div className='mb-3'>
				<hr className='mb-3' />
				<button
					onClick={handleLogout}
					className='text-white bg-primary font-medium px-5 py-1 rounded-sm'
				>
					Logout
				</button>
			</div>
		</div>
	)
}
