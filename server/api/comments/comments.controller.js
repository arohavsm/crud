import { Mongoose } from 'mongoose';
import { Comment } from '../../models/user.comments.model'

export const getAll = async (req, res) => {
  try {
    const user = req.user
    console.log(`user: ${user}`)
    if(!user) {
      return res.send({message: 'Please login to use the application'})
    }
    const comments = await Comment.find({user})
    if(!comments.length > 0){
      return res.status(500).send({message: 'There are no comments'})
    }
    return res.send(comments)
  } catch (e) {
    console.log(e)
    return res.status(500).send({ message: 'Could not get comments' })
  }
}

export const getCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const { user } = req.body
    if(!user || id) {
      return res.status(500).send({message: "Please send user id and comment id"})
    }
    const result = await Comment.find({_id: Mongoose.Types.ObjectId(id), user})
    if(!result){
      return res.status(500).send({
        message: 'Could not find the comments for this id'
      })
    }

    return res.send(reuslt)
 } catch (e) {
   return res.status(500).send({ message: 'Could not get comment'})
 }
}


export const add = async (req, res) => {
  try {
    const { title, body } = req.body
    if(!title || !body) {
      return res.status(500).send({ message: 'Title or body is empty'})
    }
    const result = await Comment.create({title, email})
    if (!result) {
      return res.status(500).send({message: 'Could not add comments'})
    }
    return res.send(result)
  } catch (e) {
    return res.status(500).send({message: 'Could not add comment'})
  }
}

export const update = async ( req, res ) => {
  try {
    const { id } = req.params
    const { title, body } = req.body
    if(!title || email) {
      return res.status(500).send({ message: 'Title or body is empty'})
    }
    const result = await Comment.findByIdAndUpdate(id, { $set: { title, body }})
    if (!result) {
      return res.status(500).send({ message: 'Could not find the target comment' })
    }
    const newTitle = result.title
    const newBody = result.body
    return res.send({
      _id: id,title: newTitle, body: newBody,
      message: `Updated comment successfully for the title ${title} to ${newTitle}`
    })
  } catch (e) {
    return res.status(500).send({ message: 'Could not update the comment'})
  }
}

export const remove = async (req, res) => {
  try{
    const { id } = req.params
    const { title } = req.body
    if (!id || !title) {
      return res.status(500).send({ message: 'Id and title are required'})
    }
    const result = await Comment.findByIdAndRemove(id)
    if (!result){
      return res.status(500).send({ message: `Could not remove comment ${title}`})
    }
    return res.send({
      message: `Removed comment ${title} successfully`
    })
  } catch (e) {
    return res.status(500).send({ message: 'Could not remove the comment'})
  }
}
