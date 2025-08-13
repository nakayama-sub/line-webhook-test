// api/ping.js
module.exports = (req, res) => {
  res.status(200).json({ ok: true, method: req.method, t: Date.now() });
};
