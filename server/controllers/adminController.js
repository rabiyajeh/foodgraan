const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "admin123";

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    res.status(200).json({ token: 'admin-token' });
  } else {
    res.status(401).json({ message: 'Invalid login credentials' });
  }
};
