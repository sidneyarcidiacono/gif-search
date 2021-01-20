require('dotenv').config()
// Require express to set up our web framework
const express = require('express')
const Tenor = require('tenorjs').client({
  // Access key from .env file
  "Key": process.env.API_KEY,
  "Locale": "en_US", // Tenorjs allows us to customize locale based on our region
  "Filter": "high", // "off", "low", "medium", "high"
})

// Initialize our app
const app = express()

// Middleware
const exphbs = require('express-handlebars')

// Tell our app what to parse when we tell it to res.render()
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Routes
app.get('/', (req, res) => {
  // Handle home page prior to user entering search
  term = ''
  if (req.query.term) {
    term = req.query.term
  }
  // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
  Tenor.Search.Query(term, '10')
    .then(response => {
      // Store gifs we get back from search
      const gifs = response
      // pass the gifs to our home template
      res.render('home', { gifs })
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/greetings/:name', (req, res) => {
  const name = req.params.name
  res.render('greetings', { name })
})

// Start Server

app.listen(3000, () => {
  console.log('Gif search listening on port localhost:3000')
})
