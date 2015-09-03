module.exports = function(app) {
  var index = require('../controllers/index.server.controller');
  var landing = require('../controllers/landing.server.controller');
  var chemicals = require('../controllers/chemicals.server.controller');


  app.get('/', landing.render);
  app.get('/landing', landing.render)
  app.get('/quizzes/elements', chemicals.render)
};
