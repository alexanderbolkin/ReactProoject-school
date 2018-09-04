const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const expressJwt = require('express-jwt');
const app = express();

// Parsers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Routes
app.use('/user', require('./api/routes/user.route'));
app.use('/school', require('./api/routes/schools.route'));
// app.use('/schoolData', require('./api/routes/schoolDatas.route'));

app.use('/stats', require('./api/routes/stats.route'));
app.use('/messages', require('./api/routes/messages.route'));

app.use('/api', function(req, res, next) 
{
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
//Api and routes
// app.use('/api', apiRoutes);
  
// Start the server
const port = process.env.PORT || '3003';
app.listen(port, () => console.log(`Running on localhost:${port}`));