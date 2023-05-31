import { NextApiRequest, NextApiResponse } from 'next';

import { createUserToken } from '@/lib/auth';
import sha512 from '@/lib/crypto';
import excuteQuery, { AuthUser } from '@/lib/database';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Bad Request' });
    return;
  }
  try {
    const { name, password } = req.body;
    if (!(name || password)) {
      res.status(400).json({ message: 'All Input Required' });
      return;
    }

    const result: AuthUser[] = await excuteQuery(
      'SELECT `UUID`,`NAME`,`PASSWORD` FROM `auth` WHERE `NAME`=? LIMIT 1;',
      [name]
    );

    if (!result || result.length === 0) {
      res
        .status(404)
        .json({ message: 'User Not Found', registered: false, logged: false });
      return;
    }

    const user = result[0];
    const isAuthenticated = sha512(password) === user.PASSWORD;
    if (!isAuthenticated) {
      res.status(400).send({
        message: 'Invalid Credentials',
        registered: true,
        logged: false,
      });
      return;
    }

    res.status(200).json({
      message: 'Successfully Logged In',
      registered: true,
      logged: true,
      name: user.NAME,
      uuid: user.UUID,
      token: createUserToken(user.NAME),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Problem' });
  }
}

export default handler;
