import bcrypt from 'bcryptjs';
import {query} from './src/db.js';

const createDummyUser = async () => {
  const username = 'test2';
  const password = 'test123';
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await query(`INSERT INTO users (username, password) VALUES ('${username}', '${hashedPassword}') RETURNING *`);
    console.log('✅ Dummy user created:', result[0]);
  } catch (err) {
    console.error('❌ Error inserting dummy user:', err.message);
  }
};

createDummyUser();