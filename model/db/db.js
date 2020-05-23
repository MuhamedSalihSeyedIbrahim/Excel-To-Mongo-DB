const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const excelToDb = new Schema({
  name: String,
  id: Number,
  mobile: Number,
  address: String,
});

module.exports = mongoose.model("ExcelToDb", excelToDb);
