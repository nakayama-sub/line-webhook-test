// api/line-webhook.js
module.exports = async (req, res) => {
  if (req.method === 'GET') return res.status(200).send('OK'); // Verify用
  if (req.method === 'POST') return res.status(200).json({ received: true }); // 受信確認
  res.status(405).end();
};
