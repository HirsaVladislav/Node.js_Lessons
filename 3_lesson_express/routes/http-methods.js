const express = require('express');
const router = express.Router();

const array = [{ id: 1, name: 'Olga', lastName: 'Petruk' }, { id: 2, name: 'Vasiliy' }, { id: 3, name: 'Helga' }];

// Http Methods CRUD
router.get('/', (req, res, next) => {
  res.send(array);
});

router.post('/', (req, res, next) => {
  const { id, name } = req.body;
  array.push({ id, name });
  res.send(array);
});
  // http://localhost:4321/api/http-methods/3
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, lastName } = req.body;
  let user = array.find((obj) => obj.id === Number.parseInt(id));
  user.name = name;
  user.lastName = lastName;
  res.send(array);
});



router.patch('/:id', (req, res, next) => {
  const { id, name, lastName } = req.body;
  let user = array.find((obj) => obj.id === Number.parseInt(id));
  name && (user.name = name);
  lastName && (user.lastName = lastName);
  res.send(array);
});

router.delete('/:id', (req, res, next) => {
  res.send('Delete method');
});

// app
//   .route('/blog')
//   .get((req, res) => {
//     res.send('Get a list of blog');
//   })
//   .post((req, res) => {
//     res.send('Add a record to blog');
//   })
//   .put((req, res) => {
//     res.send('Update blog');
//   });

// GET requests a representation of a resource. Queries using this method can only retrieve data.

// POST is used to send entities to a specific resource. Often causes a state change 
// or some kind of side effect on the server.

// PUT replaces all current representations of the resource with the request data.

// DELETE deletes the specified resource.

// PATCH is used to partially modify a resource.

module.exports = { httpMethodsRouter: router };