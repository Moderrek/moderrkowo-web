import { NextApiRequest, NextApiResponse } from 'next';

import excuteQuery, { AuthUser } from '@/lib/database';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.status(400).json({ message: 'Bad Request' });
    return;
  }
  try {
    const { name } = req.body || req.query;
    if (!name) {
      res.status(400).json({ message: 'All Input Required' });
      return;
    }

    const result: AuthUser[] = await excuteQuery(
      'SELECT `UUID`,`NAME` FROM `auth` WHERE `NAME`=?;',
      [name]
    );

    if (!result || result.length === 0) {
      res.status(404).json({ message: 'User Not Found', registered: false });
      return;
    }
    const user = result[0];
    res.status(200).json({
      message: 'User Found',
      registered: true,
      name: user.NAME,
      uuid: user.UUID,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Problem' });
  }
}

export default handler;
