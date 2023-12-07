const bcrypt = require("bcrypt")
const Joi = require("joi")
const express = require("express")
const { User } = require("../models/user")
const genAuthToken = require("../utils/genAuthToken")

const router = express.Router()

// sending data to DB with "post" request
router.post("/", async (req, res) => {
  //validate request data from frontend
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  })
  const { error } = schema.validate(req.body)

  if (error) return res.status(400).send(error.details[0].message)

  // check the user exist
  let user = await User.findOne({ email: req.body.email })

  if (user) return res.status(400).send("User already exist...")

  // create user document
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })

  // make password "h5" type generate Salt
  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)

  // save the user document in db
  user = await user.save()

  //generate json web token
  const token = genAuthToken(user)

  //send the token to the front-end
  res.send(token)
})

module.exports = router
