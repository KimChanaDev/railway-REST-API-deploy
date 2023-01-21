const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = require('../model/Product')

router.get('/', (req, res, next) => {
    // query all
    Product.find((err, products) => {
        if(err) return next(err)
        res.json(products);
    })
})
router.get('/:id', (req, res, next) => {
    // query one
    Product.findById(req.params.id, (err, post) => {
        if (err) return next(err)
        res.json(post)
    })
})
router.post('/', (req, res, next) => {
    // create/insert
    Product.create(req.body, (err, post) => {
        if (err) return next(err)
        res.json(post)
    })
})
router.put('/:id', (req, res, next) => {
    // update
    Product.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err)
        res.json(post)
    })
})
router.delete('/:id', (req, res, next) => {
    // delete
    Product.findByIdAndDelete(req.params.id, (err, post) => {
        if (err) return next(err)
        res.json(post)
    })
})
module.exports = router