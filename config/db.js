//Connection file to mongo db
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			// 'mongodb+srv://bda-app:bdaapp123@cluster0.kc6ygac.mongodb.net/?retryWrites=true&w=majority',
			process.env.MONGODB_URI,
			{
				useUnifiedTopology: true,
				useNewUrlParser: true,
			}
		);
		console.log(
			`MongoDB Connected: ${conn.connection.host}`.cyan.underline
		);
	} catch (error) {
		console.error(`Error: ${error.message}`.red.bold);
		process.exit();
	}
};

module.exports = connectDB;
