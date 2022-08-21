import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reviewsService from './reviewsService';

const initialState = {
	reviews: [],
	isLoading: false,
	isError: false,
	isSuccess: false,
	message: '',
};

//Create Review
export const createReview = createAsyncThunk(
	'reviews/createReviews',
	async (reviewData, thunkAPI) => {
		try {
			return await reviewsService.createReview(reviewData);
		} catch (error) {
			const errorMessage =
				(error.response &&
					error.response.data &&
					error.response.data.errorMessage) ||
				error.errorMessage ||
				error.toString();
			return thunkAPI.rejectWithValue({ errorMessage });
		}
	}
);

//Get Reviews
export const getReviews = createAsyncThunk(
	'reviews/getAll',
	async (_, thunkAPI) => {
		try {
			return await reviewsService.getReviews();
		} catch (error) {
			const errorMessage =
				(error.response &&
					error.response.data &&
					error.response.data.errorMessage) ||
				error.errorMessage ||
				error.toString();
			return thunkAPI.rejectWithValue({ errorMessage });
		}
	}
);

export const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createReview.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createReview.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.reviews.push(action.payload);
			})
			.addCase(createReview.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getReviews.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getReviews.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.reviews = action.payload;
			})
			.addCase(getReviews.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = reviewsSlice.actions;
export default reviewsSlice.reducer;
