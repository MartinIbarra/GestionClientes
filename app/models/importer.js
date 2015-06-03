'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/localDB');

var ImporterSchema = new mongoose.Schema({
	
	importerName: {
		type: String,
		require: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	article: {
		type: Number,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	amount: {
		type: Number,
		require: true
	},
	priceBuy: {
		type: Number,
		require: true
	},
	priceSell: {
		type: Number,
		require: true
	}
});

mongoose.model('importers', ImporterSchema);