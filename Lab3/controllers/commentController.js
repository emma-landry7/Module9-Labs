'use strict'
const Models = require('../models')

// finds all comments in DB, then sends array as response
const getComments = (res) => {
    Models.Comment.findAll({})
        .then(data => res.status(200).send({ result: 200, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

// uses JSON from req.body to create new comment in DB
const createComment = (data, res) => {
    Models.Comment.create(data)
        .then(data => res.status(201).send({ result: 201, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

// uses JSON from req.body to update comment ID from req.params.id
const updateComment = (req, res) => {
    Models.Comment.update(req.body, { where: { id: req.params.id } })
        .then(data => res.status(200).send({ result: 200, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

// deletes comment from req.params.id
const deleteComment = (req, res) => {
    Models.Comment.destroy({ where: { id: req.params.id } })
        .then(data => res.status(200).send({ result: 200, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

module.exports = {
    getComments, createComment, updateComment, deleteComment
}