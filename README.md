# Nile API - Express


## Entities
User:
* email
* passwordHash

Product:
* name
* price
* imageUrl

Purchase:
* products: (array of Product)
* user: ref
* timestamp
* virtual: totalCost()

## ERD

[Entity Relationship Diagram](https://i.imgur.com/fQcOcT1.png)

## Routes

* POST '/sign-up' (no auth)
* POST '/sign-in' (no auth)
* PATCH '/change-password' (auth)
* DELETE '/sign-out' (auth)
* GET '/products' (no auth) - index - `Product.find()`
* GET '/purchases' (auth) - index - `Order.find({ user: id })`
* GET '/cart' (auth) - show - `Order.find({ user: id,  closed: false })`
* POST '/cart/:id' (auth) - add item - `Order.update({ products.add(:id) })`
* DELETE '/cart/:id' (auth) - remove item - `Order.update({ products.remove(:id) })`
* POST '/checkout' (auth) - update status - `Order.update({ closed: true })`
