// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "psU18q4L0CKisfwxSZPF4djsk",
  TWITTER_CONSUMER_SECRET: "zhK3RNcU58BcCczKnXerUFtos9JLWk7qITfkGUYhHCo7TQ1Urz",
  TWITTER_ACCESS_TOKEN: "1344294792-sSJOyNm8SjPksKwy84PMRh89wIAmvCcXZwKWL5S",
  TWITTER_TOKEN_SECRET: "r2DMJGkF70QN9NAL9XheRJA8QJ2WwzCKJP6t5Rifxdd1V"
};

const MONGODB = {
  MONGODB_URI: 'mongodb+srv://m001-student:new_password@cluster0.fbi1f.mongodb.net/twitter_auth?retryWrites=true&w=majority'
};

const SESSION = {
  COOKIE_KEY: "thisappisawesome"
};

const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION
};

module.exports = KEYS;
