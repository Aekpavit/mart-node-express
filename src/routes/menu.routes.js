const express = require('express')
const router = express.Router()
const upload = require('../config/upload')
const menucontroller = require('../controllers/menu.controller')


router.get('/menus',menucontroller.seacrhMenu)
router.get('/menu',menucontroller.getAllmenu)
router.get('/menu/:id',menucontroller.getMenu)
router.get('/menuc',menucontroller.count)
router.delete('/menu/:id',menucontroller.deleteMenu)
router.post('/menu',menucontroller.addMenu)
router.put('/menu/:id',upload.single('img'),menucontroller.updateMenu)



module.exports = router