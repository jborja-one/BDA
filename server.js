const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
dotenv.config();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/reviews', reviewRoutes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/client/build')));
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res) => {
		res.send('API is running...');
	});
}

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.bold
	)
);
