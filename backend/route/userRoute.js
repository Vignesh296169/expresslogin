const userRoute = require("express").Router();
const User = require("../model/user");

userRoute.get("/", (req, res) => {
  res.send("from the home page");
});
// users post the details
userRoute.post("/login", async (req, res) => {
  try {
    const person = await User.find({
      name: req.body.name,
      password: req.body.password,
    });
    if (person.length === 1) {
      res.status(200);
      return res.json({ msg: "user found" });
    } else {
      res.status(404);
      res.json({ message: "user not found" });
    }
  } catch (error) {
    res.status(400);
    res.json({ message: error });
  }
});
module.exports = userRoute;
