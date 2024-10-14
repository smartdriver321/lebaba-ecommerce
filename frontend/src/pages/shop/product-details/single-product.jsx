import { Link } from 'react-router-dom'

import RatingStars from '../../../components/rating-stars'

export default function SingleProduct() {
	return (
		<>
			<section className='section__container bg-primary-light'>
				<h2 className='section__header capitalize'>Single Product Page</h2>
				<div className='section__subheader space-x-2'>
					<span className='hover:text-primary'>
						<Link to='/'>home</Link>
					</span>
					<i className='ri-arrow-right-s-line'></i>
					<span className='hover:text-primary'>
						<Link to='/shop'>shop</Link>
					</span>
					<i className='ri-arrow-right-s-line'></i>
					<span className='hover:text-primary'>Product name</span>
				</div>
			</section>

			<section className='section__container mt-8'>
				<div className='flex flex-col items-center md:flex-row gap-8'>
					{/* product image */}
					<div className='md:w-1/2 w-full'>
						<img
							src='https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt=''
							className='rounded-md w-full h-auto'
						/>
					</div>

					<div className='md:w-1/2 w-full'>
						<h3 className='text-2xl font-semibold mb-4'>Product name</h3>
						<p className='text-xl text-primary mb-4 space-x-1'>
							$ Product price
							<s className='ml-1'>$ Product old price</s>
						</p>
						<p className='text-gray-400 mb-4'>Product description</p>

						{/* additional product info */}
						<div className='flex flex-col space-y-2'>
							<p>
								<strong>Category:</strong> Product category
							</p>
							<p>
								<strong>Color:</strong> Product color
							</p>
							<div className='flex gap-1 items-center'>
								<strong>Rating: </strong>
								<RatingStars rating='Product rating' />
							</div>
						</div>

						<button className='mt-6 px-6 py-3 bg-primary text-white rounded-md'>
							Add to Cart
						</button>
					</div>
				</div>
			</section>
		</>
	)
}
