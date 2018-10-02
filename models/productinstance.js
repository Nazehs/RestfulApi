const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  status: {
    type:String,
    enum: ["Finished", "Available"],
    default: "Available",
    required: true
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
    required: true
  }
});


module.exports = mongoose.model("prodcutinstance", productSchema);