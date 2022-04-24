const mongoose = require('mongoose');
const { genSalt, hash, compare } = require('bcrypt');

const regex = require('../utils/regex');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      match: [regex.emailRegex, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: [6, 'The password must be at least 6 characters long'],
    },
    pic: {
      type: String,
      required: true,
      default:
        'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
    },
  },
  { timestamps: true }
);

// fire a function before doc saved to db
userSchema.pre('save', async function () {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
});
//Static method to log in a user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (email === '') {
    throw Error('noEmail');
  }
  if (password === '') {
    throw Error('noPassword');
  }

  const validateEmail = email.match(regex.emailRegex);

  if (!validateEmail) {
    throw Error('noValid');
  }
  if (user) {
    const auth = await compare(password, user.password);
    if (auth) {
      return user;
    }

    throw Error('noAuth');
  }

  throw Error('noUser');
};

const User = mongoose.model('user', userSchema);

module.exports = User;
