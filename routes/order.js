const router = require("express").Router();
const { authenticateToken } = require("./userAuth");
const Book = require("../models/book");
const Order = require("../models/order");
const User = require("../models/user");

router.post("/place-order",authenticateToken, async (req,res) => {
    try{
        const { id } = req.headers;
        const {order}= req.body;
        for(const orderData of order){
            const newOrder = new Order({user: id, book: orderData._id});
            const orderDataFromDb = await newOrder.save();

            //saving order in user model
            await User.findByIdAndUpdate (id, {
                $push: {orders: orderDataFromDb._id},
            });
            //clearing cart
            await User.findByIdAndUpdate(id,{
                $pull: {cart :orderData._id},
            });
        }
        return res.json({
            status:"Success",
            message:"Order Placed Successfully",
        });
 
    }catch(error){
        return res.status(500).json({message:"An error has occurred"});

    }
});


router.get("/get-order-history",authenticateToken, async (req,res) =>{
    try{
        const {id} = req.headers;
        const userData = await User.findById(id).populate({
            path:"orders",
            populate:{path:"book"},
        });

        const ordersData = userData.orders.reverse();
        return res.json({
            status:"Success",
            data:ordersData,
        });
    }catch(error){
        return res.status(500).json({message:"An error occurred"});

    }
});

router.get("/get-all-orders",authenticateToken, async (req,res) =>{
    try{
        const userData = await Order.find()
        .populate({
            path:"book",
        })
        .populate({
            path:"user",
        })
        .sort({createdAt:-1});
        return res.json({
            status:"Success",
            data:userData.at,
        });
    }catch(error){
        return res.status(500).json({message:"An error occurred"});
    }
});

router.put("/update-status/:id",authenticateToken, async (req,res)=>{
    try{
        const {id} = req.params;
        //can add method to check that only admin can make the changes
        
        await Order.findByIdAndUpdate(id, {status:req.body.status});
        return res.json({
            status:"Success",
            message:"Status Updated Successfully",
        });
    }catch(error){
        return res.status(500).json({message:"An error occurred"});
    }
});

module.exports=router;