const mongoose = require("monngoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/lab-authentication-with-passport";

mongoose.connect(MONGODB_URI, {
  userNewUrlParser: true
})

.then(() => console.info("Successfully connected to the database ${MONGODB_URI}"))
.catc(error => console.error("An error oCcurred trying to connect to the database ${MONGODB_URI}", error))