'use strict'

const User = require('./user')
// const Post = require('')

async function init() {
    await User.sync()
    // await Post.sync()
}

init()

module.exports = {
    User,
    // Post
}