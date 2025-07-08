const express = require('express');
const router = express.Router();

// Route 1: Get all users
router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Swaraj' },
    { id: 2, name: 'Anand' }
  ]);
});

// Route 2: Get user profile
router.get('/profile', (req, res) => {
  res.json({
    id: 1,
    name: 'Swaraj Anand',
    role: 'Developer'
  });
});

// Route 3: Get user settings
router.get('/settings', (req, res) => {
  res.json({
    theme: 'dark',
    notifications: true
  });
});

// Route 4: Get dashboard info
router.get('/dashboard', (req, res) => {
  res.json({
    tasks: 10,
    completed: 6,
    pending: 4
  });
});

module.exports = router;
