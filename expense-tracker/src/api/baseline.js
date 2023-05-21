import connect from '../db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const db = await connect();
    const baseline = await db.collection('omxpbaseline').find().toArray();
    res.status(200).json(baseline);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
