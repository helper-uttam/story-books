const router = require('express').Router();
let Stories = require('../models/stories.model');

router.route('/').get((req, res) => {
    Stories.find()
    .then(stories => res.json(stories))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    const newStories = new Stories({
        title, 
        description
    });

    newStories.save()
    .then(() => res.json('Story added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Stories.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Stories.findByIdAndDelete(req.params.id)
      .then(() => res.json('Story deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Stories.findById(req.params.id)
      .then(stories => {
        stories.title = req.body.title;
        stories.description = req.body.description;
  
        stories.save()
          .then(() => res.json('Story updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
module.exports = router;