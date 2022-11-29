import express from 'express';
import path from 'path'

import foodServiceRoutes from './foodServiceRoutes.js';
import sqlDemoRoutes from './sqlDemoRoutes.js'; 

const router = express.Router();