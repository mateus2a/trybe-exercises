// routers/userRouter.js
const router = require('express').Router();
const {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  isValidToken
} = require('../middlewares/authUser');
const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

router.post(
  '/register',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(201).json({ message: 'user created' }),
);

router.post(
  '/login',
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(200).json({ token: '86567349784e' })
);

router.get(
  '/btc',
  isValidToken,
  async (_req, res) => {
    const result = await axios.get(ENDPOINTEXTERNALAPI);

    res.status(200).json(result.data);
  }
);

module.exports = router;