const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

exports.createPost = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('text').trim().notEmpty().withMessage('Text is required'),
 
  asyncHandler(async (req, res) => {
    const { title, text } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Assuming Post is a model with a schema like { title: String, text: String, date: Date }
    const newPost = new Post({
      title: title,
      Text: text,
      date: new Date(),
    });

    // Save the new post to the database
    await newPost.save();

    // Send a success response
    res.sendStatus(200);
  }),
];

// exports.deletePost = asyncHandler(async (req, res) => {
// });
