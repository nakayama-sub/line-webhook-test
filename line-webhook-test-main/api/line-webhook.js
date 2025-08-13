// api/line-webhook.js
// 最小のLINE Webhookエンドポイント（まずは200を返すだけ）
// Webhook到達確認用：返信はせず、LINEの再試行を防ぐために即200

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // ここで req.body.events が受け取れていればOK（あとで署名検証や返信を追加）
    res.status(200).json({ status: 'ok' });
  } else {
    // GETなどは疎通確認用
    res.status(200).send('LINE webhook ready');
  }
}
