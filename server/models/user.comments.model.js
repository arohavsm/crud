import mongoose, { Schema } from 'mongoose'

const userCommentSchema = Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  comment: String
})

export const Comment = mongoose.model('Comment', userCommentSchema)