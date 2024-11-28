const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const homeRoutes = require('./routes/homeRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Use routes
app.use('/', homeRoutes);
app.use('/contact', contactRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
