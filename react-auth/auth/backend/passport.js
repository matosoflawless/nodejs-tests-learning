const passport = require('passport');


const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "287235752639-ece72km0uekaafnmv9jd06kq0465o0e6.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));


passport.serializeUser((user,done) => {
    done(null,user)
})
passport.deserializeUser((user,done) => {
    done(null,user)
})