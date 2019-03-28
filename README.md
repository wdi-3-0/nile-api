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
* items: (array of Product)
* closed: boolean
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
* GET '/purchases' (auth) - index - `Purchase.find({ user })`
* GET '/cart' (auth) - show - `Purchase.find({ user,  closed: false })`
* POST '/cart' (auth) - create - `Purchase.create()`
* POST '/cart/:id' (auth) - add item - `Purchase.update({ items.add(:id) })`
* DELETE '/cart/:id' (auth) - remove item - `Purchase.update({ items.remove(:id) })`
* POST '/checkout' (auth) - update status - `Purchase.update({ closed: true })`
