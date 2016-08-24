'use strict';
{
	var express = require('express')
		, router = express.Router()

	router
		.use(express.static(__dirname + '/public')) // node_modules/csci7551-course-website/
		.get('/', (req, res, next) => {
			res.sendFile(__dirname + '/public/index.html', (err) => {
				if (err) next(err)
			})
		})

	module.exports = router
}
