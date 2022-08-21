import axios from 'axios';

const API_URL = '/api/reviews';

//create a new review
const createReview = async (reviewData) => {
	const response = await axios.post(API_URL, reviewData);

	return response.data;
};

//get a review
const getReviews = async () => {
	const response = await axios.get(API_URL);

	if (response.data) {
		return response.data;
	}

	throw new Error('Review could not be retrieved');
};

const reviewsService = {
	createReview,
	getReviews,
};

export default reviewsService;
