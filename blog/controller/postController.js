const post = require("../models/postModel");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");


exports.createPost =[ 
  
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('text').trim().notEmpty().withMessage('Text is required'),
 
asyncHandler(async (req, res) => {
  const {title,text}= req.body;
const errors = validationResult(req)
const post = {
  title:title,
  text:text
}
})];

exports.deletePost = asyncHandler(async((req,res)=>{

}))