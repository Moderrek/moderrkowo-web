import { NextApiRequest, NextApiResponse } from 'next';

function hello(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'Bambang' });
}

export default hello;
