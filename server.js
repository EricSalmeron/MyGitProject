import express from 'express';
import livereload from 'livereload';
import connectLivereload from 'connect-livereload';
import dotenv from 'dotenv';
import path from 'path';

import apiRoutes from './server/routes/apiRoutes.js';