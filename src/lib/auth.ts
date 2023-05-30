import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const ACCESS_TOKEN = process.env.ACCESS_TOKEN ? process.env.ACCESS_TOKEN : '';

export function createUserToken(name: string) {
  return jwt.sign({ name: name }, ACCESS_TOKEN, {
    expiresIn: '2h',
  });
}

export const verifyToken = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    return res.status(403).json({ message: 'No Authorization' });
  }
  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN);
    // req.user = decoded;
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
  return next();
};
