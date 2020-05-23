const mongoose = require("mongoose");
const { dbConfig } = require("../config/db");
exports.dbConnection = () => {
  mongoose.connection.on("open", function () {
    console.log("Connected to mongo successfully");
  });

  mongoose.connection.on("disconnect", function () {
    console.log("Mongo disconnected");
  });

  mongoose.connection.on("error", function (err) {
    console.log("Mongoose default connection error: " + err);
  });

  process.on("SIGINT", function () {
    mongoose.connection.close(function () {
      console.log(
        "Mongoose default connection disconnected through app termination"
      );
      process.exit(0);
    });
  });

  return mongoose.connect(dbConfig.url, dbConfig.options);
};
