const mongoose = require('mongoose');
const { genSalt, hash, compare } = require('bcrypt');

const emailRegex = /^[a-zA-Z0-9\\+\\.\\_\\æ\\\\ø\\\\å\\-\\+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Please enter a name']

   },
   email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      match: [emailRegex, 'Please enter a valid email']
   },
   password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: [6, 'The password must be at least 6 characters long']
   }
}, { timestamps: true });

// fire a function before doc saved to db
userSchema.pre('save', async function () {
   const salt = await genSalt();
   this.password = await hash(this.password, salt);

});
//Static method to log in a user
userSchema.statics.login = async function (email, password) {
   const user = await this.findOne({ email });

   if (user) {

      const auth = await compare(password, user.password);
      if (auth) {
         return user;
      }
      throw Error('The user does not exist');
   }
   throw Error('The user does not exist');
};

const User = mongoose.model('user', userSchema);

module.exports = User;