const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const cardioController = require('../controllers/cardioentries')
const strengthController = require('../controllers/strengthentries')
const dashboardController = require('../controllers/dashboard')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.post('/', cardioController.createCardioEntry)
router.get('/dashboard', ensureAuth, dashboardController.getCardioEntries, dashboardController.getStrengthEntries)

module.exports = router