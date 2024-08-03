import Product from '../models/Product.js';


//get all  products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// add product

export const addProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        let id;
        if (products.length > 0) {
            const last_product = products[products.length - 1];
            id = last_product.id + 1;
        } else {
            id = 1;
        }

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        await product.save();
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


//remove product

export const removeProduct = async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        res.json({
            success: true,
            id: req.body.id,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//get new collection
export const newCollection = async (req, res) => {
    try {
        let products = await Product.find({});
        let newCollection = products.slice(-10);  // Get the last 8 products
        console.log("New collection fetched:", newCollection);
        res.send(newCollection);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


//get popular in mobiles

export const popularinMobiles = async(req,res)=>{
    try{
        let products = await Product.find({category:"mobiles"}); //product shcema mobile
        let popular_in_mobiles = products.slice(0,4);
        console.log("Popular in Mobiles Fetched");
        res.send(popular_in_mobiles);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// add products in cart

export const addtoCart =  async (req,res)=>{
    try{
       let userData = await Users.findone({_id:req.user.id});
       userData.cartData[req.body.itemId] += 1;

       //save in db

       await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
       res.send("added")
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
}
