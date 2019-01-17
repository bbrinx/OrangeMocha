import express from 'express';
import path from 'path';

const app = express();

// Serve the static files from the React app
app.use(express.static(path.resolve('..', 'client', 'build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req: express.Request, res: express.Response) => {
  const list = ["item1", "item2", "item3"];
  console.log('Sent list of items');
  return res.json(list);
});

// Handles any requests that don't match the ones above
app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve('', 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

// {
//   "extends": [""],
//   "defaultSeverity": "off",
//   "linterOptions": {
//     "exclude": [
//       "**/config/**/*.js",
//       "**/node_modules/**/*.ts",
//       "**/coverage/lcov-report/*.js"
//     ]
//   }
// }
