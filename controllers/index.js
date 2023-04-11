const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Routing
router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/home', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/expense', (req, res) => {
    res.render('expense');
});

module.exports = router;
