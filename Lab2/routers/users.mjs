import express from 'express';


import {
  getAll,
  getOne,
  save
} from './../service/users.mjs';
const router = express.Router();

// The second edpoint allows any student from the database to issue a token
// 根据firstName 获得任何学生
router.get('/:firstName', async (req, res) => {
  const { firstName } = req.params;
  const user = await getOne(firstName);
  res.status(200).json(user);
})

// The first ednpoint returns a list of students, without authorization.
// 得到所有学生列表

router.get('/', async (req, res) => {
  const users = await getAll();
  res.status(200).json(users);
})

// The third endpoint allows you to create another student if you have a token.
// 创建一个学生
router.post('/', async (req, res) => {
  const { firstName, lastName, nickname } = req.body;
  const user = {
    firstName: firstName,
    lastName: lastName,
    nickname: nickname
  }
  const createdUser = await save(user);
  res.status(200).json(createdUser)
})

export default router;