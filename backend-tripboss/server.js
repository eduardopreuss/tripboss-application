import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import flights from './routes/flightsRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/flights', flights);

app.listen(port, () => console.log(`Server is running on port ${port}`));
