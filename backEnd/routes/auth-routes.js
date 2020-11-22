const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "http://localhost:4200/loggedIn";
var Twitter = require('twitter-js-client').Twitter;

// when login is successful, retrieve user info
    //Callback functions
    var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
    };
    var temp;
    var success = function (data) {
      console.log(data)
    };
    var config = {
      "consumerKey": "psU18q4L0CKisfwxSZPF4djsk",
    	"consumerSecret": "zhK3RNcU58BcCczKnXerUFtos9JLWk7qITfkGUYhHCo7TQ1Urz",
    	"accessToken": "1344294792-sSJOyNm8SjPksKwy84PMRh89wIAmvCcXZwKWL5S",
    	"accessTokenSecret": "r2DMJGkF70QN9NAL9XheRJA8QJ2WwzCKJP6t5Rifxdd1V",
    	"callBackUrl": "http://localhost:4200/timeline"
    }
    var twitter = new Twitter(config);

router.get("/fetchTweets",(res,req)=>{
  twitter.getMentionsTimeline({ count: '2'}, error, data=> {
    return res.json(data)
  });
})

router.get("/login/success", (req, res) => {
  if (req.user) {
    return res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  return res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:4200/");
});

// auth with twitter
router.get("/twitter", passport.authenticate("twitter"));

// redirect to home page after successfully login via twitter
router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "/auth/login/failed"
  })
);


module.exports = router;
