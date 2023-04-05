const router = require('express').Router();
const userRoutes = require('./userRoutes');
const expenseRoutes = require('./expenseRoutes');

router.use('/users', userRoutes);
router.use('/api', expenseRoutes);

module.exports = router;
