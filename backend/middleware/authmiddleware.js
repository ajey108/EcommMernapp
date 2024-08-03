// Fetch user middleware
import jwt from 'jsonwebtoken';

export const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).json({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret_ecom');
    req.user = data.user;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export default fetchUser;
