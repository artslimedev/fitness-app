const express = require('express')
const router = express.Router()
const cardiosController = require('../controllers/cardioentries') 
const strengthsController = require('../controllers/strengthentries') 
const dashboardController = require('../controllers/dashboard') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, dashboardController.getCardioEntries)

router.post('/createCardioEntry', cardiosController.createCardioEntry)

router.put('/editCardioEntry', cardiosController.editCardioEntry)

router.delete('/deleteCardioEntry', cardiosController.deleteCardioEntry)

// ----------------------------------

// STRENGTH ROUTES

// ----------------------------------

// router.get('/', ensureAuth, strengthsController.getStrengthEntries)

router.post('/createStrengthEntry', strengthsController.createStrengthEntry)

router.put('/editStrengthEntry', strengthsController.editStrengthEntry)

router.delete('/deleteStrengthEntry', strengthsController.deleteStrengthEntry)




module.exports = router