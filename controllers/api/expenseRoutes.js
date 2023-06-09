const router = require('express').Router();
const { Expense } = require('../../models');
const withAuth = require('../../utils/auth');

router.get("/", withAuth, async (req, res) => {
  try {
    const allExpenses = await Expense.findAll({
      where: {
        user_id: req.session.user_id
      }
    })

    console.log(allExpenses)

    res.json(allExpenses)
  } catch(err) {
    console.log(err);
    res.status(404).json(err);
  }
})

router.post('/', withAuth, async (req, res) => {
    try {
        const newExpense = await Expense.create({
            ...req.body,
            user_id: req.session.user_id,
            
        });
    res.status(200).json(newExpense);
    } catch (err) {
        res.status(404).json(err);
    }
});



router.delete('/:user/:id', withAuth, async (req, res) => {
    try {
      const expenseData = await Expense.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!expenseData) {
        res.status(404).json({ message: 'No Expenses found with this id!' });
        return;
      }
  
      res.status(200).json(expenseData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;