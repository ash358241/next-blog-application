import data from '../data'

export default function handler(req, res) {
    const {postId} = req.query
    const {Posts} = data
    const post = Posts.find(p => p.id == postId)

    if(post){
        return res.status(200).json(post)
    }

    else{
        return res.status(404).json({error: 'Data not found!'})
    }
}