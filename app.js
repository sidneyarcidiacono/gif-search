// Require express to set up our web framework
const express = require('express')

// Initialize our app
const app = express()

// Middleware
const exphbs = require('express-handlebars')

// Tell our app what to parse when we tell it to res.render()
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Routes
app.get('/', (req, res) => {
  const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
  res.render('hello-gif', { gifUrl })
})

app.get('/greetings/:name', (req, res) => {
  const name = req.params.name
  res.render('greetings', { name })
})

// Start Server

app.listen(3000, () => {
  console.log('Gif search listening on port localhost:3000')
})
