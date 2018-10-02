const mongoose = require("mongoose");
const product = require("../models/products");
const productinstance = require("../models/productinstance");

// fetcing all documents from our db
exports.get_all_productinstance = (req, res, next) => {
    productinstance.find().populate('product').then(results => {
    res
      .status(200)
      .send({
        productsinstance: results
      })
      
  }).catch(next);;
};

// creating a new document

exports.create_instance_document = (req, res, next) => {
    productinstance.create(req.body).
    then(result => {
      res
        .status(200)
        .send({
          result: result,
          created: true
        })
        
    }).catch(next);;
};

// fetching a single a document details
exports.get_single_product_instance = (req, res, next) => {
    productinstance.findById(req.params._id).then(instance => {
    res
      .status(200)
      .send({
        product: instance
      })
      
  }).catch(next);;
};

// dleting a single document
exports.delete_single_document_instance = (req, res, next) => {
    productinstance.findByIdAndRemove({_id: req.params._id}).then(result => {
    res
      .status(200)
      .send({
        result: result,
        deleted: true
      })
      
  }).catch(next);;
};

// update a single a document
exports.update_document_instance = (req, res, next) => {
    productinstance
    .findOneAndUpdate({ _id: req.params._id }, req.body)
    .then(() => {
        productinstance.findOne({ _id: req.params._id }).then(result => {
        res
          .status(200)
          .send({
            result: result,
            update: true
          })
          
      })
    })
    .catch(next);
};


//delete all instance
exports.delete_all =(req,res,next)=>{
    productinstance.remove({}).then((results)=>{
        res.status(200).send({
            result:results, deleted:true
        })
    }).catch(next);
}