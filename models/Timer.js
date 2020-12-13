const mongoose = require('mongoose');

module.exports = mongoose.model("Timer", mongoose.Schema({
	target: Number,
	title: String,
	message: String
}));