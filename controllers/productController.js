const mongoose = require("mongoose");
const product = require("../models/products");
const productinstance = require("../models/productinstance");

// fetcing all documents from our db
exports.get_all_products = (req, res, next) => {
  product.find().then(results => {
    res
      .status(200)
      .send({
        products: results
      })
      
  }).catch(next);;
};

// creating a new document

// exports.create_document = (req, res, next) => {
//   product.create(req.body).
//     then(result => {
//       res
//         .status(200)
//         .send({
//           result: result,
//           created: true
//         })
        
//     }).catch(next);
// };

exports.create_document = (req, res, next) => {
    product
      .create(req.body)
      .then(product => {
        res.status(200).send({ product: product, create: true });
      })
      .catch(next);
    // var product = new Products({
    //   _id:new mongoose.Types.ObjectId(),
    //   req:req.body
    // });
    // product.save((err)=> {
    //   if(err) return next(err);
    // });
  };

// fetching a single a document details
exports.get_single_product = (req, res, next) => {
  product.findById(req.params._id).then(product => {
    res
      .status(200)
      .send({
        product: product
      })
      
  }).catch(next);;
};

// dleting a single document
exports.delete_single_document = (req, res, next) => {
  product.findByIdAndRemove({_id: req.params._id}).then(result => {
    res
      .status(200)
      .send({
        result: result,
        deleted: true
      })
      
  }).catch(next);;
};

// update a single a document
exports.update_document = (req, res, next) => {
  product
    .findOneAndUpdate({ _id: req.params._id }, req.body)
    .then(() => {
      product.findOne({ _id: req.params._id }).then(result => {
        res
          .status(200)
          .send({
            result: result,
            update: true
          })
          .catch(next);
      });
    })
    .catch(next);
};

//delete all documents

exports.delete_all =(req,res,next)=>{
    product.remove({}).then((results)=>{
        res.status(200).send({
            result:results, deleted:true
        })
    }).catch(next);
}
