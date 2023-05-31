import { NextApiRequest, NextApiResponse } from 'next';

import excuteQuery from '@/lib/database';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(400).json({ message: 'Bad Request' });
    return;
  }
  try {
    const resultHub: { count: number }[] = await excuteQuery(
      'SELECT COUNT(*) as `count` FROM `auth` LIMIT 1',
      []
    );
    const resultSurvival: { count: number }[] = await excuteQuery(
      'SELECT COUNT(*) as `count` FROM `users` LIMIT 1',
      []
    );

    res.status(200).json({
      message: 'Ok',
      registered: resultHub[0].count,
      survival: resultSurvival[0].count,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Problem' });
  }
}

export default handler;
