// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// pull in Mongoose model for examples
const Product = require('../models/product')

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /examples
router.get('/products', (req, res, next) => {
  Product.find()
    .then(products => {
      // `products will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return products.map(product => product.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(products => res.status(200).json({ products }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
