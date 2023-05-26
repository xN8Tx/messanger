import dbPool from '../../db/db.js';

import makeUsername from '../../utils/make-username.js';

import { UserType } from './auth-types.js';

const registration = async (email: string) => {
  try {
    const user: UserType = {
      email: email,
      username: makeUsername(email) || '',
      firstName: 'User',
      lastName: '',
    };

    const newUser = await dbPool.query(
      'INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *',
      [user.email, user.username, user.firstName, user.lastName],
    );

    return newUser.rows[0];
  } catch (error: any) {
    throw new Error(error);
  }
};

const login = async (email: string) => {
  try {
    const user = await dbPool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0) return await registration(email);

    return user.rows[0];
  } catch (error: any) {
    throw new Error(error);
  }
};

export { login };
