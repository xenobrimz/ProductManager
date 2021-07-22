const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true,"Setup is needed"],
        minlength:[10,"setup needs to be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required:[true,"punchline is needed"],
        minlength:[3,"punchline needs to be at least 3 characters long"]
    },
    isFunny: {type: Boolean, 
        required: [true,'jokes are either funny or un-funny NO EXEPTIONS!!!!']}
})

const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports = Jokes