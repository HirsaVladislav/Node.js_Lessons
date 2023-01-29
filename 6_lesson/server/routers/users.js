const express = require("express");
const { createUser } = require("../controllers/users/createUser");
const { deleteUser } = require("../controllers/users/deleteUser");
const { getAllUsers } = require("../controllers/users/getAllUsers");
const { getFullNameById } = require("../controllers/users/getFullNameById");
const { updateUserName } = require("../controllers/users/updateUserName");
const router = express.Router();

// http://localhost:4321/api/
router.get("/", (req, res) => getAllUsers(req, res));

router.get("/:id/full-name", (req, res) =>
  getFullNameById({ id: req.params.id }, res)
);

// router.get('/:id', );

router.post("/", (req, res) => createUser(req.body, res));

// router.put('/:id', );

router.patch("/:id/name", (req, res) =>
  updateUserName({ id: req.params.id, name: req.body.name }, res)
);

router.delete('/:id', (req, res) => deleteUser({ id: req.params.id }, res));

module.exports = { usersRouter: router };
