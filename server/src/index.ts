import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose = require('mongoose');
import path from 'path';
import config from '../config';
import users from './routes/users';

const app = express();
dotenv.config();
mongoose.connect(config.database.url, {
  auth: {
    password: config.database.password,
    user: config.database.user,
  },
  dbName: config.database.db,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static files from the React app
app.use(express.static(path.resolve('..', 'client', 'build')));
app.use('/api/users', users);

// Handles any requests that don't match the ones above
app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve('..', 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
