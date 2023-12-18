// Imortar esquema y modelo 
const {Schema, model} = require('mongoose')

//Establecer el primer esquema 
const portafolioSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    }
},{
    timestamps:true
})
 
//Importa el modelo 
module.exports = model('portafolio',portafolioSchema)