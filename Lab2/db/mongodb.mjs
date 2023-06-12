import { MongoClient } from 'mongodb';

const url = 'mongodb://127.0.0.1';
const client = new MongoClient(url);
const dbName = 'lab02';

let connection;
try {
  connection = await client.connect();
} catch (e) {
  console.error(e);
}

let db = connection.db(dbName);
const students = db.collection('students');

// 检查集合是否存在，不存在则创建
const count = await students.countDocuments();
if (count === 0) {
  await students.insertOne({
    nickname: 'Tang Yong',
    firstName: 'Tang',
    lastName: 'Yong',
  });
  console.log('Students collection created successfully');
} else {
  console.log('Students collection already exists');
}

export default db;