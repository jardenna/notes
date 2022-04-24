const Goal = require('../models/GoalModel');

// @desc Get goals
// @route GET api/goals
// @access Private
const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
  } catch (err) {
    res.status(400).json(err);
  }
};

// @desc Create goals
// @route POST api/goals
// @access Privates
const setGoal = async (req, res) => {
  try {
    const goal = await Goal.create({
      text: req.body.text,
      user: req.user.id,
    });

    if (!req.body.text) {
      res.status(400);
      throw new Error('Please set a text');
    }
    res.status(200).json(goal);
  } catch (err) {
    res.status(400).json(err);
  }
};

// @desc Update goal
// @route PUT api/goals/goaldsId
// @access Private
const updateGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.goalId);

  try {
    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
      return res.status(400).json('User not authorized');
    }
    const goalId = req.params.goalId;
    const updatedGoal = await Goal.findByIdAndUpdate(goalId, req.body, {
      new: true,
    });
    res.status(200).json(updatedGoal);
  } catch (err) {
    res.status(400).json(err);
  }
};

// @desc Delete goal
// @route DELETE api/goals/goaldsId
// @access Private
const deleteGoal = async (req, res) => {
  const goalId = req.params.goalId;
  try {
    const goal = await Goal.findById(goalId);

    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
      return res.status(400).json('User not authorized');
    }
    await goal.remove();
    res.status(200).json(goalId);
  } catch (err) {
    res.status(401).json('The goal was not found');
  }
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
