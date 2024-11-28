// Controller for the contact route
exports.contactPage = (req, res) => {
    res.render('contact', { title: 'Contact Page', message: 'Reach out to us!' });
};
