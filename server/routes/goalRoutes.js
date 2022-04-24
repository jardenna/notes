const express = require('express');
const router = express.Router();
//const authMiddleware = require('../middleware/authMiddleware');
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

router.route('/').get(getGoals).post(setGoal);

router.route('/:goalId').put(updateGoal).delete(deleteGoal);

module.exports = router;
