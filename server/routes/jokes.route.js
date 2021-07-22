const JokesController = require('../controllers/jokes.controller')

module.exports = app => { 
    app.get('/api/jokes', JokesController.findAllJokes)
    app.get('/api/jokes/:_id/', JokesController.findOneJoke)
    app.post('/api/create/', JokesController.createJoke) 
    app.patch('/api/jokes/:_id/update', JokesController.updateJoke)
    app.delete('/api/jokes/:_id/delete', JokesController.deleteJoke)
}