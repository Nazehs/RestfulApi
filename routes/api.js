const express = require('express');
const product = require('../controllers/productController');
const productInstance = require("../controllers/productinstanceController");

const router = express.Router();

// route for getting all products 
router.get('/products', product.get_all_products)





module.exports=router;