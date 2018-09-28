const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// decalring an instance of Schema class from mongoose
const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "product name is required"]
  },
  productDescription: {
    type: String,
    required: [true, "production is required"]
  },
  count: {
    type: Number,
    required: [true, "Prodcut count is required"]
  },
  creationDate: {
    type: Date,
    default: Date.now()
  }
});

// export  the model
module.exports = mongoose.model("product",productSchema);

