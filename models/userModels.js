const  mongoose =  require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true // unique validator works on unique fields.
    },
    password: {
        type: String,
        required: true,
    },
});
userSchema.plugin(uniqueValidator);
const User = mongoose.model('User', userSchema);
User.createIndexes // create index out of it in Db.
module.exports = { User };