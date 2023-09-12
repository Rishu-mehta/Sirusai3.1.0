const express = require('express');
const router = express.Router();
const User = require('../schemafolder/contactschema'); 


//  routes and middleware here
router.post('/contactus', (req, res) => {
    const { firstname, lastname, email, phonenumber, message } = req.body;
    if (!firstname || !lastname || !email || !phonenumber || !message) {
        return res.status(422).json({ error: "please fill the field property" });
    }
    // Create a new user document using the User model
    const newUser = new User({
        firstname, lastname, email, phonenumber, message
    });

    // Save the user document to the database
    newUser.save()
        .then(savedUser => {
            console.log('User saved to the database:', savedUser);
            res.json({ message: 'User registered successfully' });
        })
        .catch(error => {
            console.error('Error saving user to the database:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
    })
    module.exports = router;
