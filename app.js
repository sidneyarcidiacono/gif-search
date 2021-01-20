// Require express to set up our web framework
const express = require('express')

// Initialize our app
const app = express()

// Middleware

// Routes
app.get('/', (req, res) => {
  res.send('Hello Squirrel!')
})

// Start Server

app.listen(3000, () => {
  console.log('Gif search listening on port localhost:3000')
})
