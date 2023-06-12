import express from 'express';
var router = express.Router();
import bcrypt from 'bcrypt';
import {
  getAll,
  getOne,
  save
} from './../service/users.mjs';

router.post('/login', async (req, res) => {
  const { firstName, password } = req.body;
  const user = await getOne(firstName);
  if (!user) {
    res.status(401).send('Not authorised!');
    return;
  }
  console.log(password, user.passwordHash);
  if (!bcrypt.compareSync(password, user.passwordHash)) {
    res.status(401).send('Not authorised!');
    return;
  }
  const accessToken = jwt.sign({ sub: user._id }, 'verySecretKey', {
    algorithm: 'HS256',
    expiresIn: '1h'
  })
  if (!accessToken) {
    res.status(401).send('Not authorised!');
    return;
  }
  res.status(200).json({ accessToken });
})

export default router;