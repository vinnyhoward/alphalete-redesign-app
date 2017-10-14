const express = require('express'),
        bodyParser = require('body-parser'),
        massive = require('massive'),
        session = require('express-session'),
        passport = require('passport'),
        cors = require('cors'),
        Auth0Strategy = require('passport-auth0'),
        ctrl = require('./productsController');

require ('dotenv').config();
// =============================================================================
// EXPRESS AND EXPRESS SESSIONS
// =============================================================================
const app = express();
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
// =============================================================================
// CORS CONTROLLERS
// =============================================================================
app.use(cors());
// =============================================================================
// PASSPORT AND BODYPARSER
// =============================================================================
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json())
// =============================================================================
// MASSIVE - CONNECTION STRING FOR DATABASE
// =============================================================================
massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
    const PORT = 3030;
    app.listen(PORT, () => console.log('Listening on port: ', PORT))
})
// =============================================================================
// PASSPPORT STRATEGY
// =============================================================================
passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');

    db.get_user([profile.identities[0].user_id]).then(user => {
        console.log(user)
        if (user[0]){
            done(null, user[0].id)
        } else {
            db.create_user([profile.displayName, profile.emails[0].value, profile.identities[0].user_id]).then(user => {
                done(null, user[0].id)
            })
        }
    }).catch(err => console.log(err))
}))  
// =============================================================================
// PASSPORT SERIALIZE AND DESERIALIZE 
// =============================================================================
passport.serializeUser(function(userId,done) {
    done(null, userId);
}) 
passport.deserializeUser(function(userId,done) {
    app.get('db').current_user([userId]).then( userId => {
        done(null,userId[0])
    })
}) 
// =============================================================================
// AUTH ENDPOINTS
// =============================================================================
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/mens',
    failureRedirect: 'http://localhost:3000/#womens'
}));
app.get('/auth/user', (req, res) => {
   if(!req.user) {
       return res.status(404).send('User not found');
   } else {
    return res.status(200).send(req.user);
   }
})
app.get('/auth/logout', (req,res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/')
})
// =============================================================================
// PRODUCT ENDPOINTS
// =============================================================================
app.get('/api/getproduct/:id', ctrl.getOne);
app.get('/api/getproducts/all', ctrl.getAllProducts);
app.get('/api/getproducts/search', ctrl.getSearchProducts);
// =============================================================================
// CART ENDPOINTS
// =============================================================================
app.post('/api/cart', ctrl.addToCart);
app.delete('/api/cart/:id/:userid', ctrl.removeFromCart);
// =============================================================================
// MENS ENDPOINTS
// =============================================================================
app.get('/api/getproducts/mens', ctrl.getAllMale);
app.get('/api/getproducts/mens-asc', ctrl.filterMensByAsc);
app.get('/api/getproducts/mens-desc', ctrl.filterMensByDesc);
app.get('/api/getproducts/mens-price-low-high', ctrl.filterMensByLowHigh);
app.get('/api/getproducts/mens-price-high-low', ctrl.filterMensByHighLow);
// =============================================================================
//  WOMANS ENDPOINTS
// =============================================================================
app.get(`/api/getproducts/womans`, ctrl.getAllFemale);
app.get('/api/getproducts/womans-asc', ctrl.filterWomansByAsc);
app.get('/api/getproducts/womans-desc', ctrl.filterWomansByDesc);
app.get('/api/getproducts/womans-price-low-high', ctrl.filterWomansByLowHigh);
app.get('/api/getproducts/womans-price-high-low', ctrl.filterWomansByHighLow);

