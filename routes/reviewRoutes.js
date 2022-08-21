const express = require('express');
const { createReview, getReviews } = require('../controllers/reviewController');

const router = express.Router();

router
	.route('/')
	.post(createReview)
	.get(getReviews);

module.exports = router;
