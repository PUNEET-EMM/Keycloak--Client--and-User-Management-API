import express from 'express';
import { createClient, getAllClients, updateClient, deleteClient,getClientById } from '../controllers/clientController.js';

const router = express.Router();

// Routes
router.post('/', createClient); // Create a new client
router.get('/', getAllClients); // Get all clients
router.get('/:id',getClientById ); // Get a client by ID
router.put('/:id', updateClient); // Update a client by ID
router.delete('/:id', deleteClient); // Delete a client by ID

export default router;
