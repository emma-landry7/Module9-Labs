'use strict'
const Models = require('../models')

// finds all users in DB, then sends array as response
const getUsers = (res) => {
    Models.User.findAll({})
        .then(data => res.status(200).send({ result: 200, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

// uses JSON from req.body to create new user in DB
const createUser = (data, res) => {
    Models.User.create(data)
        .then(data => res.status(201).send({ result: 201, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

// uses JSON from req.body to update user ID from req.params.id
const updateUser = (req, res) => {
    Models.User.update(req.body, { where: { id: req.params.id } })
        .then(data => res.status(200).send({ result: 200, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

// deletes from req.params.id
const deleteUser = (req, res) => {
    Models.User.destroy({ where: { id: req.params.id } })
        .then(data => res.status(200).send({ result: 200, data: data }))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message })
        })
}

module.exports = {
    getUsers, createUser, updateUser, deleteUser
}