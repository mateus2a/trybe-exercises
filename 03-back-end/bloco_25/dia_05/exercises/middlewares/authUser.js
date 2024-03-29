// middlewares/validations.js
const isValidUsername = (req, res, next) => {
  const { username } = req.body;
  
  if(!username || username.length < 3)
    return res.status(400).json({ message: 'invalid data' });
  
    next();
  };
  
  const isValidEmail = (req, res, next) => { 
    const { email } = req.body
  
    if(
      !email ||
      !email.includes('@') ||
      !email.includes('.com')
    )
      return res.status(400).json({ message: 'invalid data' });
    
    next();
  };
  
  const isValidPassword = (req, res, next) => {
    const { password } = req.body;
    const passwordRegex = /^[0-9]*$/;
  
    if(
      password.length < 3 ||
      password.length > 8 ||
      !password.match(passwordRegex)
    )
      return res.status(400).json({ message: 'invalid data' });
    
    next();
  };

  const isValidToken = (req, res, next) => {
    const token = req.headers.authorization;
    const tokenRegex = !/^[a-zA-Z0-9]{12}$/;
    
    if (!token || tokenRegex.test(token))
      return res.status(401).json({ message: 'invalid token' });
    
      next();
    };
  
  
  module.exports = {
    isValidUsername,
    isValidEmail,
    isValidPassword,
    isValidToken
  };