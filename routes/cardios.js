const express = require('express')
const router = express.Router()
const cardiosController = require('../controllers/cardioentries') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, cardiosController.getCardioEntries)

router.post('/createCardio', cardiosController.createCardioEntry)

router.put('/editCardio', cardiosController.editCardioEntry)

router.delete('/deleteCardio', cardiosController.deleteCardioEntry)

module.exports = router