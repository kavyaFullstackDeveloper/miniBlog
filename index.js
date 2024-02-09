const expres = require('express')

const {default: mongoose} = require('mongoose')

const bodyParser = require('body-parser')

const route = require('./route')

const app = expres() 

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://kavya:xLvSB2EPL3Th9y_@cluster0.ri0ljz1.mongodb.net/', {
    useNewUrlParser: true
}) 
.then(() => console.log('mongodb is connected'))
.catch((err) => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3004, function(){
    console.log('express app running on ' + (process.env.PORT || 3004))
})

module.exports = app 