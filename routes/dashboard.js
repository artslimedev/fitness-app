const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const dashboardController = require('../controllers/dashboard') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, dashboardController.getEntries)

router.post('/createCardioEntry', dashboardController.createCardioEntry)

router.put('/editCardioEntry', dashboardController.editCardioEntry)

router.delete('/deleteCardioEntry', dashboardController.deleteCardioEntry)

// ----------------------------------

// STRENGTH ROUTES

// ----------------------------------


router.post('/createStrengthEntry', dashboardController.createStrengthEntry)

router.put('/editStrengthEntry', dashboardController.editStrengthEntry)

router.delete('/deleteStrengthEntry', dashboardController.deleteStrengthEntry)


router.get('/logout', authController.logout)




module.exports = router