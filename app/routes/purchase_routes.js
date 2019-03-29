// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// pull in Mongoose model for examples
const Purchase = require('../models/purchase')

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /examples
router.get('/purchases', (req, res, next) => {
  Purchase.find({ closed: true })
    .populate('items')
    .then(purchases => {
      // `purchases will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return purchases.map(purchase => purchase.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(purchases => res.status(200).json({ purchases }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
