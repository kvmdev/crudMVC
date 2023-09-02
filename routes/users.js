const { Router } = require("express");
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/usersController");

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.post('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;