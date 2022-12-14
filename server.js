//npm install express mongoose ejs dotenv
//npm install --save-dev nodemon

//"start": "nodemon server.js"

const express = require("express")
const path = require('path');
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 6900;
const mongoose = require("mongoose")
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const methodOverride = require("method-override");
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const dashboardRoutes = require('./routes/dashboard')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

//set middleware
app.set("view engine", "ejs")
app.use(express.static('node_modules/tw-elements/dist/js'));
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(logger('dev'))
app.use(cors())

//Use forms for put / delete
app.use(methodOverride("_method"));

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl:process.env.DB_STRING}),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use(express.json())
app.use(logger('dev'))

app.use('/', mainRoutes)
app.use('/dashboard', dashboardRoutes)
  


// mongoose.connect(process.env.DB_CONNECTION ,
//     {useNewUrlParser: true},
//     () => (console.log('Connected to db!'))
// )

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
