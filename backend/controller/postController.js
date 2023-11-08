const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

exports.fetchPost = asyncHandler(async(req,res)=>{
  const allPosts = await Post.find()
  res.json(allPosts)
})

exports.createPost = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('text').trim().notEmpty().withMessage('Text is required'),
 
  asyncHandler(async (req, res) => {
    const { title, text } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    
    const newPost = new Post({
      title: title,
      Text: text,
      date: new Date(),
    });

    await newPost.save();

  
    res.sendStatus(200);
  }),
];

exports.deletePost = asyncHandler(async (req, res) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.id).exec()

  if (!deletedPost) {
    return res.sendStatus(404);
  }
  res.sendStatus(200);
});
