const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String },
  avatar: { type: String },
  githubId: { type: Number },
  githubUrl: { type: String },
  linkedinId: { type: Number},
  linkedinUrl: { type: String },
  portfolioUrl: { type: String },
  tech: [{type: String, required: true}]
});

// firstName { String } r
// lastName { String }//
// email { String } r
// password { String } r
// passwordConfirmation { String } r
// image { String }//
// // githubId { Number }//
// githubUrl { String }//
// // linkedinId { Number }//
// linkedinUrl { String }//
// portfolioUrl { String }//
// userTech [ Strings ]

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this.password && !this.githubId) {
    this.invalidate('password', 'required');
  }
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
