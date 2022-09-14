import mongoose from 'mongoose'; 
import jwt from 'jsonwebtoken'; 
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
firstName: {
   type: String,
   required: [true, 'Pease type your name'],
   trim: true,
   lowercase: true
 },
 lastName: {
   type: String,
   required: [true, 'Pease type your name'],
   trim: true,
   lowercase: true
 },
email: {
   type: String,
   required: [true, 'Pease type your e-mail'],
   unique: true,
   lowercase: true
},
password: {
    type: String,
    required: true,
    minLength: 7
},
isAdmin: {
  type: Boolean,
  default: false
},
tokens: [{
  token: {
  type: String,
  required: true
    }
  }]
}, {
timestamps: true
})

// jwt sign method assigned to userSchema
userSchema.methods.generateAuthToken = async function () {
  const user = this; 
  const token = jwt.sign({ _id: user._id.toString()}, process.env.JWT_SECRET)
user.tokens = user.tokens.concat({token})
  return token; 
}

// user password is hash before saving
userSchema.pre('save', { document: true, query: false }, async function (next) { 
	const user = this; 
  user.password = bcrypt.hashSync(user.password, 10);

	next();
});

// bcrypt compare method assigned to userSchema
userSchema.methods.comparePassword = function (candidatePassword, callback) {
  const user = this;
  return callback(null, bcrypt.compareSync(candidatePassword, user.password)); 
}

export default mongoose.model('User', userSchema);