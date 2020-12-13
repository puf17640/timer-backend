const express = require('express'),
	router = express.Router(),
	Timer = require('../models/Timer.js')

router.get('/api/:timerId', (req, res, next) => {
	const { timerId } = req.params
  Timer.findOne({ _id: timerId }).exec((err, timer) => {
		if (err) return next(err)
		res.send(timer)
  })
})

router.post('/api/timer/new', (req, res, next) => {
	const { target, title, message } = req.body
	new Timer({ target, title, message }).save((err, timer) => {
		if (err) return next(err)
		res.send(timer)
	})
})

module.exports = router