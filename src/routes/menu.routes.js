const express = require('express')
const router = express.Router()
const menucontroller = require('../controllers/menu.controller')



router.get('/menu',menucontroller.getAllmenu)
router.get('/menu/:id',menucontroller.getMenu)



module.exports = router