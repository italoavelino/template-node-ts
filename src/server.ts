import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

import { router } from './routes';

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use('/api', router);

export { server };
