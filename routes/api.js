// routes/api.js
const express = require('express');
const router = express.Router();
const db = require('../config/firebase');

// Example API endpoint to fetch data
router.get('/data', async (req, res) => {
  try {
    const snapshot = await db.collection('testCollection').get();
    const data = snapshot.docs.map(doc => doc.data());
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
