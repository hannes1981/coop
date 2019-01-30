const mongoose = require(Mongoose);
const bycript = require("bycript")
const saltRounds = 10;


const schema = new Schema ({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    require: [true, "Email is required"],
    match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,10}$/, 'Invalid email format']
 },


  password: {
    type: String,
    required: true,
    minLength: [10, "Email needs to have at least 10 characters],
  }
});


schema.methods.checkPassword = function (password) {
return bycript.compare(password, this.password);
}


schema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bycript.genSalt(saltRounds)
    then(salt => {
     return bycript.hash(user, password, salt)
     .then(hash => {
       user.password = hash;
       next();
     });

    })

    .catch(error => next(error));
    
    else {

      next();
      
    }

    
  }
}

const User = Mongoose.model("User", schema);
module.exports = User;

