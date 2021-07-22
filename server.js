const express = require('express');
const app = express();
port = 3000;

require('./server/config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}))

require('./server/routes/jokes.route')(app);

app.listen(port, ()=>console.log(`we running on port ${port}. Aaaaeeeeyyyy!!!`))

