const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
port = 8000;

require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

require('./server/routes/products.route')(app);

app.listen(port, ()=>console.log(`we running on port ${port}. Aaaaeeeeyyyy!!!`));

