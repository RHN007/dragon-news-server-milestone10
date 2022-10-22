const express = require('express');
const app = express();
const port = process.env.PORT || 6001;
const cors = require('cors')

app.use(cors())



const categories = require('./data/categories.json')


app.get('/', (req, res) => {
  res.send('Hallo World')
})

app.get('/news-categories', (req, res)=> {
  res.send(categories)
})

app.listen(port, () => {
  console.log(`Exmple app listen on port ${port}`)
})
