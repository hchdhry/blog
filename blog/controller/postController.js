const post = require("../models/postModel");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");



exports.createpost = [
  body("title").trim().escape(),
  body("text").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const newPost = new post({
      title: req.body.title,
      Text: req.body.text, 
      date: new Date(),
    });

    try {
      await newPost.save();
      res.redirect("/");
    } catch (error) {
      next(error); 
    }
  }),
];
