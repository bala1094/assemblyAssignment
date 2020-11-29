const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "http://localhost:4200/loggedIn";
var Twitter = require('twitter-js-client').Twitter;
const keys = require("./../config/keys");

// when login is successful, retrieve user info
    //Callback functions
    var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
    };
    var success = function (data) {
      console.log(data)
    };

    var config = {
      "consumerKey": keys.TWITTER_CONSUMER_KEY,
    	"consumerSecret": keys.TWITTER_CONSUMER_SECRET,
    	"accessToken": keys.TWITTER_ACCESS_TOKEN,
    	"accessTokenSecret": keys.TWITTER_TOKEN_SECRET,
    	"callBackUrl": "http://localhost:4200/timeline"
    }
    var twitter = new Twitter(config);

router.get("/fetchTweets",(req,res)=>{
    twitter.getHomeTimeline({ count: '201', tweet_mode: 'extended'}, error, data=> {
    return res.send(data);
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
