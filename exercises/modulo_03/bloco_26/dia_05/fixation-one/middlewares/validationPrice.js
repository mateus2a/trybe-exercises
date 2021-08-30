const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (price < 0) res.status(406).json({ "error": "Not Acceptable"});
  if (isNaN(price)) res.status(400).json({ "error": "Bad Request"});

  next();
}