const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type: String,
        required: true,
    },
    brand:{
        type:String,
        enum:["Nivea", "Neutrogena", "Dove", "L'Oreal", "Dr. Rashel", "Veet",],
        required:true,
    },
    quantity: {
        type:Number,
        required:true,
    },
    sold:{
        type:Number,
        default:0,
        select:false,
    },
    images:[],
    size:{
        type:String,
        required:true,
    },
    ratings:[
        {
            star:Number,
            comment: String,
            postedBy:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
        },
    ],
    totalRatings: {
        type: String,
        default: 0,
    },
}, {timestamps:true});

//Export the model
module.exports = mongoose.model('Product', productSchema);
