const passport = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;

const models = require('./../models/');


passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, cb) {
        console.log("test");
        return models.User.findOne({where: {email: email, password: password}})
            .then(user => {
                if (!user) {
                    return cb(null, false, {message: 'Incorrect email or password.'});
                }
                return cb(null, user, {
                    message: 'Logged In Successfully'
                });
            })
            .catch(err => {
                console.log('errrr', err)
                return cb(err);
            });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'HELLO' //@todo : to be transformed into dotenv
    },
    function (jwtPayload, cb) {
        //find the user in db if needed
        return models.User.findOne({where: {id: jwtPayload.id}})
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));