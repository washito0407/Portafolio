//Importar router express
const {Router} = require('express')
const router = Router()

const {renderIndex,renderAbout,renderLogin} = require('../controllers/index.controllers.js')


router.get('/',renderIndex)
router.get('/About',renderAbout)
router.get('/login',renderLogin)



module.exports = router