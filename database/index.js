var mongoose = require('mongoose');

const db = process.env.NODE_ENV || 'PRODUCTION';
const hostName = process.env.NODE_ENV === 'DOCKER' ? 'mongo' : 'localhost';
const databaseUrl = `mongodb://${hostName}:27017/node-api-${db}`;

mongoose.connect(databaseUrl, { useNewUrlParser: true });

var movieDatabaseSchema = mongoose.model('Movie', new mongoose.Schema({
	title: String,
	description: String
}));

const database = {
	saveMovie: async (title, description) => {
		await movieDatabaseSchema.create({title,description})
	},
	getAll: async () => {
		return await movieDatabaseSchema.find() }
};

module.exports = database;
