import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset, createReview } from '../../features/reviews/reviewsSlice';
import { toast } from 'react-toastify';
import LogoLight from '../../images/logo-light.png';
import '../../index.css';

function ReviewPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { reviews, isError, isSuccess, errorMessage } = useSelector(
		(state) => state.reviews
	);

	const [reviewData, setReviewData] = useState({
		fullName: '',
		rating: '',
		service: '',
		review: '',
	});

	const { fullName, rating, service, review } = reviewData;

	const onChange = (e) => {
		setReviewData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	useEffect(() => {
		if (isError) {
			toast.error(errorMessage);
		}
		dispatch(reset());
	}, [reviews, isError, isSuccess, errorMessage, navigate, dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			createReview({
				fullName,
				rating,
				service,
				review,
			})
		);

		setReviewData({
			fullName: '',
			rating: '',
			service: '',
			review: '',
		});

		toast.success('Review submitted successfully');
		navigate('/');
	};

	return (
		<div className="container">
			<div className="d-flex align-items-center justify-content-evenly mt-5">
				<img className="review-logo" src={LogoLight} alt="bda Logo" />
				<div className="d-flex flex-column align-items-center">
					<h1 className="text-center">
						<span className="xl-text bold-text">Thank You!!!</span>
					</h1>
					<h1 className="md-text reg-text mt-60">
						for working with us
					</h1>
				</div>
			</div>
			<div className="my-100">
				<h2 className="lg-text bold-text text-center">
					We always love to hear from you
				</h2>
				<h2 className="lg-text bold-text my-5 text-center">
					Tell us how we did...
				</h2>
			</div>
			<div className="d-flex flex-column align-items-center">
				<form onSubmit={handleSubmit} className="review-form">
					<div className="d-flex w-100 mt-5">
						<div className="form-group w-100 me-3">
							<div class="form-floating w-100 ">
								<input
									type="text"
									name="fullName"
									value={fullName}
									onChange={onChange}
									class="form-control review-input"
									id="floatingInput"
									placeholder="Full Name"
									required
								/>
								<label for="floatingInput">Full Name</label>
							</div>
							<div class="form-floating ">
								<select
									name="service"
									value={service}
									onChange={onChange}
									class="form-control review-input"
									id="floatingSelect"
									aria-label="Floating label select example"
									required>
									<option defaultValue="selected">
										What did we help you with?
									</option>
									<option value="Granite Countertops">
										Granite Countertops
									</option>
									<option value="Marble Countertops">
										Marble Countertops
									</option>
									<option value="Quartz Countertops">
										Quartz Countertops
									</option>
									<option value="Outdoor Countertops">
										Outdoor Countertops
									</option>
								</select>
								<label for="floatingSelect">
									Select a Service
								</label>
							</div>
							<div className="form-group">
								<select
									className="form-control review-input"
									name="rating"
									onChange={onChange}
									value={rating}
									required>
									<option defaultValue="selected">
										How did we do?
									</option>
									<option value="5">⭐️⭐️⭐️⭐️⭐️</option>
									<option value="4">⭐️⭐️⭐️⭐️</option>
									<option value="3">⭐️⭐️⭐️</option>
									<option value="2">⭐️⭐️</option>
									<option value="1">⭐️</option>
								</select>
							</div>
							<div class="form-floating">
								<textarea
									class="form-control review-textarea"
									name="review"
									value={review}
									onChange={onChange}
									placeholder="Your Message Here ..."
									id="floatingTextarea"
									required></textarea>
								<label for="floatingTextarea">
									We appreciate your feedback!
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-center my-5 pb-5">
						<button type="submit" class="md-button">
							SUBMIT
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ReviewPage;
