const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



// turn on routes
app.use(routes);

// turn on connection to db and server
// change false to true when adjusting table layout
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// // const sess = {
// //   secret: 'Super secret secret',
// //   cookie: {
// //     expires: 10 * 60 * 1000
// //   },
// //   resave: false,
// //   saveUninitialized: true,
// //   store: new SequelizeStore({
// //     db: sequelize
// //   })
// // };

// // app.use(session(sess));

// // const helpers = require('./utils/helpers');

// // const hbs = exphbs.create({ helpers });

// // app.engine('handlebars', hbs.engine);
// // app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// // app.use(require('./controllers/'));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });
