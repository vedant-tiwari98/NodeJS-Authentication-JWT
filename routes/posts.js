const router = require("express").Router();
const User = require("../model/User");
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  //   res.json({
  //     posts: {
  //       title: "my first post",
  //       description: "random data you shouldn't access",
  //     },
  //   });
  res.send(req.user);
});

module.exports = router;
