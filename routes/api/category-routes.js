const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  // grab all from categories, include product model as well
  // response format?
  // has many

  Category.findAll({
    attributes: [
      'id',
      'category_name'
    ],
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
    }
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err)
    console.log(res.json(data))
    res.status(404).json(err);
  });
  

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  // has one

Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err)
    console.log(res.json(data))
    res.status(404).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category

  Category.create({
    category_name: req.body.category_name
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
