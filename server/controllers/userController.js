const User = require("../models/userModel");
// Register a new user

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("check", name, email, password);

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Create a new user
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
};

module.exports = registerUser;

// app.post("/register", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the email is already registered
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already registered" });
//     }

//     // Create a new user
//     const newUser = new User({ email, password });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while registering the user" });
//   }
// });
