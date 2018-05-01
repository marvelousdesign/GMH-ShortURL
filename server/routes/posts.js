module.exports = {
    urlinput(req, res) {
        res.status(200).send(req.store.posts)
    },


    getPosts(req, res) {
        console.log('\n\n')
        console.log(req.store.posts)
        console.log('\n\n\n\n')
        res.status(200).send(req.store.posts)
    },
    getPost(req, res) {
        const postID = req.params.postId
        if (postID >= req.store.posts.length) {
            res.status(500).send({error: `${postID} is out of range`})
        } else {
            res.status(200).send(req.store.posts[postID])
        }
    },
    
}