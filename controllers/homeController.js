// Controller for the home route
exports.homePage = (req, res) => {
    res.render('home', { title: 'Home Page', message: 'Welcome to the MVC App!' });
};
