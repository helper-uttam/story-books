<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 14973c3d79fdc55214ab6dd2dbf87e014a70a673
const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        email, 
        password
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})
router.route('/auth/:user').get((req, res) => {
    console.log(req.params);
    const user = req.params;
    User.findOne(user)
    .then((user) => {
        return user ? res.json(true):res.json(false)
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

<<<<<<< HEAD
=======
=======
const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        email, 
        password
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})
router.route('/auth/:user').get((req, res) => {
    console.log(req.params);
    const user = req.params;
    User.findOne(user)
    .then((user) => {
        return user ? res.json(true):res.json(false)
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

>>>>>>> 91d71163bf312c5873a2733d9bb0888e370362d4
>>>>>>> 14973c3d79fdc55214ab6dd2dbf87e014a70a673
module.exports = router;