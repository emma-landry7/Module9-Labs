'use strict'
const Models = require('../models')

// finds all posts in DB, then sends array as response
const getPosts = (res) => {
    Models.Post.findAll({})
        .then(data => res.status(200).send({ result: 200, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

// uses JSON from req.body to create new post in DB
const createPost = (data, res) => {
    Models.Post.create(data)
        .then(data => res.status(201).send({ result: 201, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

// uses JSON from req.body to update post ID from req.params.id
const updatePost = (req, res) => {
    Models.Post.update(req.body, { where: { id: req.params.id } })
        .then(data => res.status(204).send({ result: 204, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

// deletes post from req.params.id
const deletePost = (req, res) => {
    Models.Post.destroy({ where: { id: req.params.id } })
        .then(data => res.status(204).send({ result: 204, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

module.exports = {
    getPosts, createPost, updatePost, deletePost
}