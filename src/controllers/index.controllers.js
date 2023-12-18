const renderIndex = (req,res)=>{
    res.render('index')
}

const renderAbout = (req,res)=>{
    res.render('login')
}
const renderLogin = (req,res)=>{
    res.render('login')
}

/*const renderContac = (req,res)=>{
    res.render('Hola')
}*/

module.exports ={
    renderIndex, 
    renderAbout,
    renderLogin
    //renderContac
}
