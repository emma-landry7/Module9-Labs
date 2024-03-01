const express = require("express")
const router = express.Router()
const Controllers = require('../controllers')

// http://localhost:8081/api/comments - GET all comments
router.get('/', (req, res) => {
    Controllers.commentController.getComments(res)
})

// http://localhost:8081/api/comments/create - POST to create a new commet
router.post('/create', (req, res) => {
    Controllers.commentController.createComment(req.body, res)
})

// http://localhost:8081/api/comments/:id - PUT to update comment by id
router.put('/:id', (req, res) => {
    Controllers.commentController.updateComment(req, res)
})

// http://localhost:8081/api/comments/:id - DELETE destroys comment by id
router.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComment(req, res)
})

module.exports = router