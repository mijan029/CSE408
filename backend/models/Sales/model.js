const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
    {
        category:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        quantity:{
            type: Number,
            required: true
        },
 

    },
    {
        timestamps: true
    }
) 



const mySaleSchema = new Schema(
    {
        category:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        saleAmount:{
            type: Number,
            required: true
        }

    },
    {
        timestamps: true
    }
) 



/*
const saleSchema = new Schema(
    {
        category:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        quantity:{
            type: Number,   //how much quantity sold
            required: true
        }
    },
    {
        timestamps: true
    }
) 

const receiveSchema = new Schema(
    {
        category:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        quantity:{
            type: Number,   //how much items received
            required: true
        }
    },
    {
        timestamps: true
    }
) 

const orderSchema = new Schema(
    {
        category:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        quantity:{
            type: Number,   //how much quantity ordered
            required: true
        }
    },
    {
        timestamps: true
    }
) 
*/

//each item=product+quantity
const itemSchema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: 'productModel',
            required: true
        },
        changed_quantity:{
            type: Number,
            required: true
        }
    }
)

//for sale records
const saleSchema = new mongoose.Schema({
    user_id: {type: String, required:true},
    customerName: {type: String, required: true },
    customerContact: {type: String, required: true },
    items: [{ 
            name:{
                type:String,
                required:true
        },
        price:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    }
    ],
   // totalAmount: { type: Number, required: true },
    //soldAt: { type: Date, default: Date.now }
}, {timestamps:true});

const cartSchema = new mongoose.Schema({
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'productModel' }],
});

//for receive records
const receiveSchema = new Schema(
    {
        items: {
            type:[itemSchema],
            required: true
        }
    },
    {
        timestamps: true
    }
)

//for receive records
const orderSchema = new Schema(
    {
        items: {
            type:[itemSchema],
            required: true
        }
    },
    {
        timestamps: true
    }
)


productModel = mongoose.model('productModel', schema)
itemModel= mongoose.model('itemModel', itemSchema)
saleModel = mongoose.model('saleModel', saleSchema)
receiveModel = mongoose.model('receiveModel', receiveSchema)
orderModel = mongoose.model('orderModel', orderSchema)
cartModel = mongoose.model('cartSchema', cartSchema)

module.exports = { productModel, saleModel, receiveModel, orderModel,itemModel,cartModel }
/*
const product1= this.productModel.create({
    "category": "juice",
    "name": "grape",
    "price": 20,
    "quantity": 10
});
const product2= this.productModel.create({
    "category": "juice",
    "name": "malta",
    "price": 20,
    "quantity": 10
});
*/

/*
const item1= this.itemModel.create({
    "product": product1,
    quantity:2
})
const item2= this.itemModel.create({
    "product": product2,
    quantity:2
})
const sale1= saleModel.create({
    "items": [item1,item2]
})
console.log(sale1)

*/