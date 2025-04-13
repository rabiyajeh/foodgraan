// routes/adminRoutes.js
import express from 'express';
const router = express.Router();

// Example admin route
router.post('/login', (req, res) => {
  res.json({ message: 'Admin login route works!' });
});

export default router; // ✅ THIS IS REQUIRED
