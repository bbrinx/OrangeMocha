import express from 'express';
const router = express.Router();
import oktaClient from '../lib/oktaClient';

/* Create a new User (register). */
router.post('/', async (req: express.Request, res: express.Response) => {
  const { body: {email, password} } = req;
  if (!req.body) { return res.sendStatus(400); }
  const newUser = {
    credentials: {
      password: {
        value: password,
      },
    },
    profile: {
      email,
      login: email,
    },
  };
  try {
    const user = await oktaClient.createUser(newUser);
    res.status(201);
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send(err);
  }
});

export = router;
