const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`Database is connected!!`.red.bold);
  } catch (err) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports.connectDB = connectDB;
