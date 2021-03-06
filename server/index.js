/*jshint node:true*/

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

//Orginal
// module.exports = function(app) {
//   var globSync   = require('glob').sync;
//   var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
//   var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

//   // Log proxy requests
//   var morgan  = require('morgan');
//   app.use(morgan('dev'));

//   mocks.forEach(function(route) { route(app); });
//   proxies.forEach(function(route) { route(app); });




// };

const bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.urlencoded({ extended: true }));

  
  app.post('/token', function(req, res) {

    if (req.body.username == 'login' && req.body.password == 'ok') {
      res.send({ access_token: "some bs" });
    } else {
      res.status(400).send({ error: "invalid_grant" });
    }

  });

  app.get('/api/codes', function (req, res) {

  	if (req.headers['authorization'] !== "Bearer some bs") {
      return res.status(401).send('Unauthorized');
    }

    return res.status(200).send({
      codes: [
        { id: 1, description: 'Obama Nuclear Missile Launching Code is: lovedronesandthensa' },
        { id: 2, description: 'Putin Nuclear Missile Launching Code is: invasioncoolashuntingshirtless' }
      ]
    });
  });


  app.get('/api/users', function (req, res) {
	  return res.status(200).send({ 
  		user: { 
  			id: 1,
  			name:"Vishu",
  			email: 'vishusharmagit@gmail.com',
        img:"http://vignette2.wikia.nocookie.net/althistory/images/a/a6/Venstre_(Denmark)_Logo.png/revision/latest?cb=20081224190313" 
  		}
  	});
	});

};