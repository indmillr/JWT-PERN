const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// registering
router.post("/register", async (req, res) => {
  try {
    // Step 1: Destructure req.body (name, email, password)
    const { name, email, password } = req.body;

    // Step 2: Check if User exists (if user exists, throw err)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }

    res.json(user.rows);

    // Step 3: Bcrypt user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // Step 4: Enter new user inside db
    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3)",
      [name, email, bcryptPassword],
    );

    res.json(newUser.rows[0]);

    // Step 5: Generate the JWT Token
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
