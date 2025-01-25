import express from 'express';
import userRoutes from './routes/userRoutes.js';
import clientRoutes from './routes/clientRoutes.js';


const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/clients', clientRoutes);


export default app;




