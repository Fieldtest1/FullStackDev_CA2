const router = require(`express`).Router()
const createError = require(`http-errors`)
const productsModel = require(`../models/products`)


// read all records
router.get(`/products`, (req, res) =>
{
    productsModel.find()
    .then(data =>
    {
        res.json(data)
    })
})


// read one record
router.get(`/products/:id`, (req, res) =>
{
    productsModel.findById(req.params.id)
    .then(data =>
    {
        res.json(data)
    })
})


// add new record
router.post(`/products`, (req, res) =>
{
    productsModel.create(req.body)
    .then(data =>
    {
        res.json(data)
    })
})


// update one record
router.put(`/products/:id`, (req, res) =>
{
    productsModel.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(data =>
    {
        res.json(data)
    })
})


// delete one record
router.delete(`/products/:id`, (req, res) =>
{
    productsModel.findByIdAndDelete(req.params.id)
    .then(data =>
    {
        res.json(data)
    })
})

module.exports = router