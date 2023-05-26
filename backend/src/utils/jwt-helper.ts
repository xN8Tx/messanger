import jwt from 'jsonwebtoken';

const jwtTokens = (id: number, username: string, firstName: string, lastName: string) => {
  const user = { id, username, firstName, lastName };

  const accessToken = jwt.sign(user, String(process.env.ACCESS_TOKEN_SECRET), { expiresIn: '15m' });
  const refreshToken = jwt.sign(user, String(process.env.REFRESH_TOKEN_SECRET), { expiresIn: '30d' });

  return { accessToken, refreshToken };
};

export { jwtTokens };
