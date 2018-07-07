var express = require('express')
var bodyParser = require('body-parser')
var ejs = require('ejs')
const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))

app.get('/',(req,res)=>{

  return res.render('new')
})
app.get('/celeb',(req,res)=>{

  return res.render('celeb')
})

app.listen(PORT, ()=>{
  console.log('listening on port 3000')
})
