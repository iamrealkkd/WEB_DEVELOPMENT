const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // Create the user
    const user = await userModel.create({
      username,
      email,
      password,
    });

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    // Set token in cookie (from your image)
    res.cookie("token", token);

    // Send response
    res.status(201).json({
      message: "User registered successfully",
      user,
      token, // Including token in response is good for testing!
    });
  } catch (error) {
    // It's always good practice to wrap database calls in try/catch
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
}

module.exports = { registerUser };
