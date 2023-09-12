import 'dotenv/config';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import passport from 'passport';

import initPassport from '../config/passport';
import routes from '../routes/users';
import sessionRoute from '../routes/session.route';
import videoRoutes from '../routes/video.route';  // <-- Importe aqui
import { connect } from './database';
import 'reflect-metadata'; 
// Instantiate express
const server = express();
server.use(compression());

// Passport Config
initPassport(passport);
server.use(passport.initialize());

// Connect to sqlite
if (process.env.NODE_ENV !== 'test') {
  connect();
}

server.use(cors({
  origin: 'https://painel-udop-demo.vercel.app',  // Substitua pela URL do seu front-end
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

server.use(express.json());

// Initialize routes middleware
server.use('/api/users', routes);
server.use('/api/sessions', sessionRoute);
console.log('Registering video route');  // <-- Adicione este log
server.use('/api/videos', videoRoutes);

console.log("Server is listening on port 5000");
console.log("Registering video route");

export default server;
