const express = require("express");
const router = express.Router();
const {getAllUsers, createUsers, getUserById, updateUser, deleteUser} = require("../controllers/user.controller");


router.get('/', getAllUsers);
router.post('/', createUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports= router;