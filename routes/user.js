// User routes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
 
// api/users
router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.get('/dni/:dni', userController.getUserByDni);
router.get('/email/:email', userController.getUserByEmail);
router.put('/:id', userController.updateUser);
router.put('/dni/:dni', userController.updateUserByDni);
router.put('/email/:email', userController.updateUserByEmail);
router.delete('/:id', userController.deleteUser);
router.delete('/dni/:dni', userController.deleteUserByDni);
router.delete('/email/:email', userController.deleteUserByEmail);
module.exports = router;