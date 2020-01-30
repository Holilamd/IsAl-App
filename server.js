const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const app = express();
const model =  require('./models/index')
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
	next();
});


app.use('/users', users);


port = process.env.PORT || 3000,

model.sequelize
    .sync()
    .then(() => console.log('Konek database'))
    .catch(err =>console.error(err,"Tidak Konek database"));
app.listen(port, () => {
    console.log('Example app listening on port port!' + port);
});





