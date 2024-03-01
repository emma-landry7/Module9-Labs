'use strict'
let Models = require('../models')

const getComments = (res) => {
    // finds all comments
    Models.Comment.find({})
        .then(data => res.status(200).send({result: 200, data: data}))
        .catch(err => {
            console.log(err)
            res.status(500).send({result: 500, error: err.message})
        })
}

const createComment = (data, res) => {
    // creates a new comment using JSON data POSTed in req.body
    console.log('createComment: ', data)
    new Models.Comment(data).save()
        .then(data => res.status(200).send({result: 200, data: data}))
        .catch(err => {
            console.log(err)
            res.status(500).send({result: 500, error: err.message})
        })
}

const updateComment = (req, res) => {
    // update the comment matching the ID from the param using JSON data POSTed in req.body
    console.log('updateComment: ', req.body)
    Models.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true } )
    .then(data => res.status(200).send({result: 200, data: data}))
    .catch(err => {
        console.log(err)
        res.status(500).send({result: 500, error: err.message})
    })
}

const deleteComment = (req, res) => {
    // deletes the comment matching the ID from the param
    console.log('deleteComment: ', req)
    Models.Comment.findByIdAndDelete(req.params.id)
        .then(data => res.status(200).send({result: 200, data: data}))
        .catch(err => {
            console.log(err)
            res.status(500).send({result: 500, error: err.message})
        })
}

module.exports = {
    getComments, createComment, updateComment, deleteComment
}