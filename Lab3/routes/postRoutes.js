const express = require("express")
const router = express.Router()
const Controllers = require('../controllers')

// http://localhost:8081/api/posts - GET all posts
router.get('/', (req, res) => {
    Controllers.postController.getPosts(res)
})

// http://localhost:8081/api/posts/create - POST to create a new post
router.post('/create', (req, res) => {
    Controllers.postController.createPost(req.body, res)
})

// http://localhost:8081/api/posts/:id - PUT to update post by id
router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res)
})

// http://localhost:8081/api/posts/:id - DELETE destroys post by id
router.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req, res)
})

module.exports = router