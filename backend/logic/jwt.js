const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, process.env.secret, (err, decoded) => {
      if (err) {
        res.sendStatus(403);
      } else {
     
        req.decoded = decoded;
        next();
      }
    });
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
