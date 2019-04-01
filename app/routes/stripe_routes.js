// Express docs: http://expressjs.com/en/api.html
const express = require('express')
require('dotenv').config()

// configurations for stripe
const keySecret = process.env.SECRET_KEY
const stripe = require('stripe')(keySecret)
const Token = require('../models/token')

// we'll use this function to send 404 when non-existant document is requested

// instantiate a router (mini app that only handles routes)
const router = express.Router()

router.post('/charge', (req, res, next) => {
  const token = Object.assign(req.body.token)

  Token.create(token)
    .then(token => res.status(201).json({
      token: token.toJSON()
    }))
    .then(() => {
      const token = req.body.token.tokenId
      stripe.charges.create({
        amount: req.body.token.total,
        currency: 'usd',
        description: 'Test Ichigo',
        source: token
      })
    })
    .catch(next)
})

module.exports = router
