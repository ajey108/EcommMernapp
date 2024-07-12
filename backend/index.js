const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors")

app.use(express.json());
app.use(cors());

//Database connection

mongoose.connect("mongodb+srv://ajey3046:H94tqHusPeJ3hobg@cluster0.nxwbegb.mongodb.net/ecommapp");

//Api

app.get('/',(req,res)=>{
    res.send('App is running')
})

// Multer setup

const storage = multer.diskStorage({
    destination:'./Uploads/images',
    filename:((req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    })
})

const upload = multer({storage:storage})

//Api for Uploading Images

app.use('/images',express.static('Uploads/images'))

app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })

})

// Schema for products

const Products = mongoose.model("Product",{
    id:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    new_price:{
        type:Number,
        require:true,
    },
    old_price:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },

    avilable:{
        type:Boolean,
        default:true,
    }
})


//api for add product

app.post('/addproduct',async(req,res)=>{
    let products = await Products.find({});
    let id;
    if(products.length>0){
        let last_product_array= products.slice(-1);
        let last_product=last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Products({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    });
    console.log(product);

    //save product in db
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//api for delete product
app.post('/removeproduct',async(req,res)=>{
    await Products.findOneAndDelete({id:req.body.id});
    console.log('removed');
    res.json({
        success:true,
        name:req.body.name
    })
})

//api for get all products

app.get('/allproducts',async(req,res)=>{
    let products = await Products.find({});
    console.log("All products fetched");
    res.send(products);
})





app.listen(port,(error)=>{
    if(!error){
        console.log(`server running on port ${400}`)
    }
    else{
        console.log(`Error:${error}`)
    }
})

