const mongoose = require("mongoose");
// Menu schema
const menuSchema=new mongoose.Schema(
    {
        name:
        {
            type : String,
            require: true
        },
        price:
        {
            type: Number,
            require: true
        },
        taste:
        {
            type: String,
            enum: ['Sweet','Sour','Spicy'],
            require: true
        },
        is_drink:
        {
            type: Boolean,
            default: false
        },
        ingredients:
        {
            type: [String],
            default: []
        },
        num_sales:
        {
            type: Number,
            default: 0
        }
    }
);

// Create Menu model
const Menu=mongoose.model('Menu',menuSchema);
module.exports=Menu;



// comment added