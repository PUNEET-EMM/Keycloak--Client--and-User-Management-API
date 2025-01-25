import express from 'express';
import { createUser, getAllUsers, deleteUser, updateUser,getUserById } from '../controllers/userController.js';

const router = express.Router();

// Routes
router.post('/', createUser); // Create a new user
router.get('/', getAllUsers); // Get all users
router.get('/:id', getUserById); // Get a user byd ID
router.delete('/:id', deleteUser); // Delete a user by ID
router.put('/:id', updateUser); // Update a user by ID

export default router;
