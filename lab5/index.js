let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

const expressHbs = require('express-handlebars');

app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/',
      defaultLayout: 'lab5',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views');

  app.use(bodyParser.urlencoded({ extended: false })) // middleware

    // parse application/json
    app.use(bodyParser.json()) // middleware

  let playerRoutes = require('./routes/peoples');
  app.use(express.static(path.join(__dirname,'public')));

  app.get('/', function (req,res) {
    res.render('home', { pageTitle: 'Lab 5'});
    });
    app.use(playerRoutes);
  app.listen(3000, () => console.log('Server ready'))