const router = require('express').Router();
const { User, Expense } = require('../models');
const withAuth = require('../utils/auth');


//Render the main homepage when the user is not logged in
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/home', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID but exclude the password field
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Expense }],
    });

    const user = userData.get({ plain: true });

    res.render('homepage', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }

  res.render('login');
});

// Expense API Endpoint
router.get('/expense', withAuth, async (req, res) => {
  try {
    // // Find the logged in user based on the session ID but exclude the password field
    res.render('expense');
    const expenseData = await Expense.findAll({
      where: {user_id: req.session.user_id}
    });

    // Send Expense Data to Pie Chart
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
