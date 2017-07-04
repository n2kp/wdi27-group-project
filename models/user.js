const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String },
  avatar: { type: String },
  githubId: { type: Number },
  githubUrl: { type: String },
  linkedinId: { type: String},
  linkedinUrl: { type: String },
  portfolioUrl: { type: String },
  tech: [{type: String, required: true}]
});

userSchema
  .virtual('percentageComplete')
  .get(function getPercentageComplete() {
    // let value = 10;
    // const requiredFields = ['email', 'avatar', 'githubUrl', 'linkedinUrl', 'portfolioUrl','tech'];
    // for(let i = 0; i < requiredFields.length; i++) {
    //   if(this[requiredFields[i]] && this[requiredFields[i]].length > 0) value+=15;
    //
    // }
    // return value;

    return ['email', 'avatar', 'githubUrl', 'linkedinUrl', 'portfolioUrl', 'tech'].reduce((value, key) => {
      return this[key] && this[key].length > 0 ? value + 15 : value;
    }, 10);
  });






userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this.password && !this.githubId && !this.linkedinId) {
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
