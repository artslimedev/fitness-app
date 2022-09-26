const express = require('express')
const router = express.Router()
const strengthsController = require('../controllers/strengthentries') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, strengthsController.getStrengthEntries)

router.post('/createStrengthEntry', strengthsController.createStrengthEntry)

router.put('/editStrengthEntry', strengthsController.editStrengthEntry)

router.delete('/deleteStrengthEntry', strengthsController.deleteStrengthEntry)

module.exports = router