const User = require("../models/user");

module.exports = (router) => {
  router.post("/register", (req, res) => {
    if (!req.body.email) {
      res.json({ success: false, message: "You must provide an e-mail" });
    } else {
      if (!req.body.username) {
        res.json({ success: false, message: "You must provide a username" });
      } else {
        if (!req.body.password) {
          res.json({ success: false, message: "You must provide a password" });
        } else {
          let user = new User({
            email: req.body.email.toLowercase(),
            username: req.body.username.toLowercase(),
            password: req.body.password,
          });

          user.save((err) => {});

          res.send("Hello world");
        }
      }
    }
  });

  return router;
};
