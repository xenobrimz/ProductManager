const Jokes = require('../models/jokes.model')

module.exports.findAllJokes = (req, res) =>{
    console.log('Calling all jokes!!!')
    Jokes.find({}) 
        .then(jokes => res.json({results: jokes}))
        .catch(err => res.json({message: 'uh-oh something went wrong', error: err})) 
}


module.exports.findOneJoke = (req, res) =>{
    console.log('Calling joke!!!')
    Jokes.find({_id: req.params._id}) 
        .then(joke => res.json({results: joke}))
        .catch(err => res.json({message: 'uh-oh something went wrong', error: err})) 
}

module.exports.createJoke = (req, res) =>{
    console.log('Creating joke!!!')
    Jokes.create(req.body) 
        .then(newJoke => res.json({result: newJoke}))
        .catch(err => res.json({message: 'uh-oh something went wrong', error: err})) 
}

module.exports.updateJoke = (req, res) =>{
    console.log('Updating Joke!!!')
    Jokes.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body, 
        {new: true, runValidators: true}
    )
       .then(updatedJoke => res.json({result: updatedJoke}))
       .catch(err => res.json({message: 'uh-oh something went wrong', error: err})) 
}
    

module.exports.deleteJoke = (req, res) =>{
    console.log('Deleting joke!!!')
    Jokes.deleteOne({ _id: req.params._id }) 
        .then( result => res.json({ result: result }) )
        .catch( err => res.json({message: 'uh-oh something went wrong', error: err}) ) 
}