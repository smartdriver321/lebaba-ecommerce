/* eslint-disable react/prop-types */
import { useState } from 'react'

import avatar from '../../../assets/avatar.png'
import { formatDate } from '../../../utils/format-date'
import PostAReview from './post-a-review'
import RatingStars from '../../../components/rating-stars'

export default function ReviewsCard({ productReviews }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const reviews = productReviews || []

	const handleOpenReviewModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseReviewModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className='my-6  bg-white p-8'>
			<div>
				{reviews.length > 0 ? (
					<div>
						<h3 className='text-lg font-medium'>All comments...</h3>
						<div>
							{reviews.map((review, index) => (
								<div key={index} className='mt-4'>
									<div className='flex gap-4  items-center'>
										<img src={avatar.png} alt='' className='size-14' />
										<div className='space-y-1'>
											<p className='text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>
												{review?.userId?.username}
											</p>
											<p className='text-[12px] italic'>
												{formatDate(review?.updatedAt)}
											</p>
											<RatingStars rating={review?.rating} />
										</div>
									</div>
									<div className='text-gray-600 mt-5  border p-8'>
										<p className='md:w-4/5'>{review?.comment}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<p>No reviews yet!</p>
				)}
			</div>

			{/* add review button */}
			<div className='mt-12'>
				<button
					onClick={handleOpenReviewModal}
					className='px-6 py-3 bg-primary text-white rounded-md'
				>
					Add A Review
				</button>
			</div>

			{/* review modal  */}
			<PostAReview
				isModalOpen={isModalOpen}
				handleClose={handleCloseReviewModal}
			/>
		</div>
	)
}
