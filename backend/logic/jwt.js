const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.secret, {
    expiresIn: '30d',
  });
};

module.exports = {
  verifyToken,
  generateToken,
};
