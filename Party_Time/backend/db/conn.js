const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://jonathan:ZjKZYPsD173hFZQD@cluster0.6xngogy.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("conectado ao banco");
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
