import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";

import User from "../models/User.js";

/**
 * @method - POST
 * @param - /users/signup
 * @description - User SignUp
 * @access Public
 */

export const signup =
  // user input checks
  ([
    body("fistName").not().isEmpty(),
    body("lastName").not().isEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 7 }),
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { firstName, lastName, email, password } = req.body;

    // find user on db
    try {
      let user = await User.findOne({ email });

      if (user)
        return res.status(400).json({ message: "Email already in use" });

      user = new User({
        firstName,
        lastName,
        email,
        password,
      });

      const token = await user.generateAuthToken();

      // save new user
      await user.save();
      res.status(201).send({ name: user.firstName, token });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("We got some issues saving your data:/");
    }
  });

/**
 * @method - POST
 * @param - /users/login
 * @description - User LongIn
 * @access Public
 */

export const login =
  // check user inputs
  ([body("email").isEmail(), body("password").isLength({ min: 7 })],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
      // check credentials
      let user = await User.findOne({ email });

      if (!user)
        return res.status(400).json({ message: "User does not exist" });

      /* user.comparePassword(password, (error, isMatch) => {
                if (!isMatch)  res.status(400).json({ message: 'Email or password is incorrect'})
                
            }) */ const isVerified = bcrypt.compareSync(
        password,
        user.password
      );
      if (!isVerified) {
        return res.status(400).json({ message: "credentials dont match" });
      }
      const token = await user.generateAuthToken();

      res.status(200).send({ message: "Welcome back", token });
    } catch (error) {
      //console.log(error);
      res.status(400).json({ message: "Server error" });
    }
  });
/**
 * @method - PUT
 * @description - update user
 * @param - /users/:id
 * @access Private
 */

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).send({ message: `User ${id} not found` });
      return;
    }
    user.set({ $set: req.body });
    user.save();

    res.status(200).send({ message: `User ${id} updated` });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

/**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /users/me
 * @access Private
 */

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { _id, name, email } = await User.findById(id);
    res.json({ id: _id, name, email });
  } catch (error) {
    res.status(400).json({ message: "Error fetching user" });
  }
};

/**
 * @method - DELETE
 * @description - delete user
 * @param - /users/:id
 * @access Private
 */

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).send({ message: `User ${id} deleted` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

/**
 * @method - GET
 * @param - /users
 * @description - Users stats
 * @access Private
 */

export const getUsers = async (req, res) => {
  const query = req.query.latest;

  try {
    const users = query
      ? await User.find().sort({ timestamp: -1 }).limit(1)
      : await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

/**
 * @method - GET
 * @param - /users
 * @description - User SignUp
 * @access Private
 */

export const getStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const users = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
