import express from 'express';
import userRouter from './routers/users.mjs';
import authRouter from './routers/auth.mjs';

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', userRouter);
app.use('/auth', authRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})