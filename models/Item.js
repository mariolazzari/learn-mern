const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Item schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Item model
const Item = mongoose.model("item", ItemSchema);

// export item model
module.exports = Item;
