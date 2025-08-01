const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => res.render('Home'));

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/privacy', (req, res) => {
  res.render('privacy');
});

app.get('/features', (req, res) => {
  res.render('features');
});

app.get('/faq', (req, res) => {
  res.render('faq');
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
