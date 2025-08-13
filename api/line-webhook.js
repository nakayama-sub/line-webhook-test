// api/line-webhook.js
export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).send('LINE webhook alive');
  }
  if (req.method === 'POST') {
    // まずは到達確認だけ（200返す）
    return res.status(200).end();
  }
  return res.status(405).end();
}
