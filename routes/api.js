const express = require('express');
const product = require('../controllers/productController');
const productInstance = require("../controllers/productinstanceController");

const router = express.Router();

// route for getting all products 
router.get('/products', product.get_all_products);

//creating new document
router.post('/products', product.create_document);

//get a single document route
router.get('/product/:_id', product.get_single_product);

//update a single document route
router.put('/product/:_id', product.update_document);

//delete a document route
router.delete('/product/:_id', product.delete_single_document);

// delete all products
router.delete('/product/', product.delete_all);

// route for getting all products instance 
router.get('/productinstance', productInstance.get_all_productinstance);

//creating new document instance
router.post('/productinstance', productInstance.create_instance_document);

//get a single document route
router.get('/productinstance/:_id', productInstance.get_single_product_instance);

//update a single document route
router.put('/productinstance/:_id', productInstance.update_document_instance);

//delete a document route
router.delete('/productinstance/:_id', productInstance.delete_single_document_instance);

// delete all instance route
router.delete('/productinstance/', productInstance.delete_all);


module.exports=router;