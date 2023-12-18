const express = require('express')
const path = require('path');
const { engine }  = require('express-handlebars');

// Inicializaciones
const app = express()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))

// Middlewares 
app.use(express.urlencoded({extended:false}))

// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))


// Configuraciones 
app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',engine({
    //Establecer la pagina inicial o master pague
    defaultLayout:'main',
    //Establecer el path de la carpeta layouts
    layoutsDir: path.join(app.get('views'),'layouts'),
    //Establecer el path de la carpeta partial
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))

//Pa visualizar el contenido 
app.set('view engine','.hbs')

// Rutas 
app.get('/',(req,res)=>{
    res.render('index')
})

module.exports = app

// Rutas 
app.use(require('./routers/index.routes'))

app.use(require('./routers/portafolio.routes'))


const methodOverride = require('method-override');
// Middlewares 
app.use(methodOverride('_method'))