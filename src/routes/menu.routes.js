const express = require('express')
const router = express.Router()
const menucontroller = require('../controllers/menu.controller')


router.get('/menu/',menucontroller.seacrhMenu)
router.get('/menu',menucontroller.getAllmenu)
router.get('/menu/:id',menucontroller.getMenu)
router.delete('/menu/:id',menucontroller.deleteMenu)
router.post('/menu',menucontroller.addMenu)
router.put('/menu/:id',menucontroller.updateMenu)



module.exports = router