import { createError } from "../error.js"
import Comment from "../models/Comment.js"
import Video from "../models/Video.js"

export const addComment = async (req, res, next) => {
     const newComment = new Comment({...req.body, userId: req.user.id})
     try {
          const savedComment = await newComment.save()
          res.status(200).send(savedComment)
     } catch (err) {
          next(err)
     }
}

export const deleteComment = async (req, res, next) => {
     try {
          const comment = await Comment.findById(res.params.id)
          const video = await Video.findById(res.params.id)
          if (req.user.id === comment.userId || req.user.id === video.userId) {
               await Comment.findByIdAndDelete(req.params.id)
               res.status(200).json("댓글이 삭제되었습니다.")
          } else {
               return next(createError(403, '댓글만 삭제할 수 있습니다!'))
          }
     } catch (err) {
          next(err)
     }
}

export const getComments = async (req, res, next) => {
     try {
          const comments = await Comment.find({ videId: req.params.videoId })
          res.status(200).json(comments);
     } catch (err) {
          next(err)
     }
}