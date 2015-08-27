module.exports = function(app) {
  var index = require('../controllers/index.server.controller');
  var landing = require('../controllers/landing.server.controller');
  var elements = require('../controllers/elements.server.controller');
  app.get('/', index.render);
  app.get('/landing', landing.render)
  app.get('/quizzes/elements', elements.render)
};
