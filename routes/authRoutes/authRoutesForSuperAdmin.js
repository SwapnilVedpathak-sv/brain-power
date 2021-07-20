const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authModelForUser = require("../models/authModel/authModelForUser");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

router.post(
  "/signUpAsSuperAdmin",
  [
    body("email").isEmail(),
    body("email").not().isEmpty(),
    body("username").not().isEmpty(),
    body("password").not().isEmpty(),
  ],
  async (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0],
      });
    }
    //Check if the password is smaller than 5
    if (req.body.password.length < 5) {
      return res.status(401).json({
        error: "Password cannot be smaller than 5 characters",
      });
    }
    const emailExist = await authModelForUser.findOne({ email: req.body.email });
    //if the user already exists then Respond that the user with the email already exists
    if (emailExist)
      return res
        .status(401)
        .json({ error: "User with the E-mail already exists" });

    //HASH THE PASSWORDS BEFORE STORING ON THE DATABASE
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userDetails = {
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword
    };
    //Saving the user details into database
    const newUser = new authModelForUser(userDetails);
    newUser
      .save()
      .then((result) => {
        return res
          .status(200)
          .json({ msg: "User Registered Successfully!!!", details: result });
      })
      .catch((error) => {
        return res.status(401).json({ error: "Something Went Wrong!!!" });
      });
  }
);

router.post(
  "/signInSuperAdmin",
  [body("email").not().isEmpty(), body("password").not().isEmpty()],
  (req, res) => {
    // console.log('req', req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0],
      });
    }
    const { email, password } = req.body;
    authModelForUser.find({ email: email }, (err, data) => {
      if (err) {
        console.log(err);
        res.status(401).json({
          error: "Please Enter a Valid Email!!",
          details: err,
        });
      }
      if (data.length == 0) {
        console.log(err);
        res.status(401).json({ error: "Please Enter a Valid Email!!" });
      } else {
        bcrypt.compare(req.body.password, data[0].password, (error, result) => {
          if (error) {
            res.status(401).json(error);
          }
          if (result == true) {
            let token = jwt.sign({ username: data[0].username }, "secret", {
              expiresIn: "3h",
            });
            data[0]
              .save()
              .then(() => {
                return res.status(200).json({
                  email: data[0].email,
                  id: data[0]._id,
                  token: token,
                });
              })
              .catch((error) => {
                return res.status(404).json({
                  error,
                  message: "Something went wrong",
                });
              });
          } else if (result == false) {
            res.status(401).json({ error: "Wrong password" });
          }
        });
      }
    });
  }
);

module.exports = router;
