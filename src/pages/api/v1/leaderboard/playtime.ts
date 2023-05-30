import { NextApiRequest, NextApiResponse } from 'next';

import excuteQuery, { ModerrkowoUser } from '@/lib/database';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(400).json({ message: 'Bad Request' });
    return;
  }
  try {
    const result: ModerrkowoUser[] = await excuteQuery(
      'SELECT `NAME`,`PLAYING_TIME` FROM `users` ORDER BY `users`.`PLAYING_TIME` DESC LIMIT 10',
      []
    );

    if (!result || result.length === 0) {
      res.status(404).json({ message: 'Users Not Found' });
      return;
    }

    const output = [];
    for (let i = 0; i < 10; i += 1) {
      if (i >= result.length) {
        output.push({ name: 'Brak', playtime_ticks: 0 });
        continue;
      }
      output.push({
        name: result[i].NAME,
        playtime_ticks: result[i].PLAYING_TIME,
      });
    }

    res.status(200).json(output);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Problem' });
  }
}

export default handler;
