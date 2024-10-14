import { Link } from 'react-router-dom'

import avatarImg from '../assets/avatar.png'

export default function Navbar() {
	return (
		<header className='fixed-nav-bar w-nav'>
			<nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
				<ul className='nav__links'>
					<li className='link'>
						<Link to='/'>Home</Link>
					</li>
					<li className='link'>
						<Link to='/shop'>Shop</Link>
					</li>
					<li className='link'>
						<Link to='/'>Pages</Link>
					</li>
					<li className='link'>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>

				{/* logo */}
				<div className='nav__logo'>
					<Link to='/'>
						Lebaba<span>.</span>
					</Link>
				</div>

				{/* nav icons */}
				<div className='nav__icons relative'>
					<span>
						<Link to='/search'>
							<i className='ri-search-line'></i>
						</Link>
					</span>
					<span>
						<button className='hover:text-primary'>
							<i className='ri-shopping-bag-line'></i>
							<sup className='text-sm inline-block px-1.5 text-white rounded-full  bg-primary text-center'>
								4
							</sup>
						</button>
					</span>
					<span>
						<>
							<img
								src={avatarImg}
								alt=''
								className='size-6 rounded-full cursor-pointer'
							/>
						</>
						<Link to='login'>
							<i className='ri-user-line'></i>
						</Link>
					</span>
				</div>
			</nav>
		</header>
	)
}
