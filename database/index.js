var mongoose = require('mongoose');
const environment = process.env.NODE_ENV || 'PRODUCTION';
let db = `node-api-${environment}`;

mongoose.connect(`mongodb://localhost/${db}`, { useNewUrlParser: true });

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
