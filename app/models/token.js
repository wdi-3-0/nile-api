'use strict'

const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
  tokenId: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  }},
{
  timestamps: true
})

const Token = mongoose.model('Token', tokenSchema)

module.exports = Token
