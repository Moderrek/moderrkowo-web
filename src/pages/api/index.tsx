import { NextApiRequest, NextApiResponse } from 'next';

function index(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Moderrkowo V1 API' });
}

export default index;
