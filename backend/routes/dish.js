const express = require('express'),
router = express.Router();
const algoliasearch = require('algoliasearch');
const models = require('../models');
const Op = require('sequelize').Op;

const dishSearchQuery = require('../sql/queries/dishSearch');

const algoliaClient = algoliasearch('WUVCYK5SHG', process.env.ALGOLIA_API_KEY);
const index = algoliaClient.initIndex('testPQ_Dishes');

router.get('/', (req,res) => {
  console.log("Serving request: " + req.baseUrl);
  models.Dish.findAll().then(dishes => {
    res.json(dishes);
  })
});

router.get('/search/:dishName', (req,res) => {
  console.log(`Get with param: ${req.params.dishName}`);
  index.search({
    query: req.params.dishName
  }, function searchDone(err, content) {
    if (err) throw err;
    
    let dishNameMatches = [];
    for (let i = 0; i < content.hits.length; i++) {
      console.log(content.hits[i].name);
      dishNameMatches.push(content.hits[i].name);
    }
    
    if (dishNameMatches.length === 0) return res.json([]);
    models.sequelize.query(dishSearchQuery,
      { replacements: dishNameMatches, type: models.sequelize.QueryTypes.SELECT })
      .then(results => res.json(results));
  });
})

router.get('/:dishName', (req,res) => {
  models.Dish.findAll({
    where: {
      name: {
        $iLike: `%${req.params.dishName}%`,
      },
    },
  })
    .then(dishes => {
      res.json(dishes);
    });
});

router.get('/:id', (req,res) => {
  console.log("Getting Dish with id: " + req.param.id);
  models.Dish.findById(req.params.id).then(dish => {
    res.json(dish);
  })
});

router.post('/', (req,res) => {
  console.log("request body: " + req.body.id);
  models.Dish.create({name: req.body.name, RestaurantId: req.body.restaurantId}).then(dish => {
    res.json(dish);
  });
});

module.exports = router;