var assert = require("assert"); //node.js core module
var Quiz = require("../quiz.js"); //quiz module
var oboe = require("oboe"); //oboe JSON parsing module

describe('quiz class exists', function(){
  var quiz = new Quiz("elements");
  it('should be a valid class', function(){
    assert.equal(typeof quiz, 'object');
  });
  it('should return a JSON string', function(){
    quiz.getQuestionData("name", function(quiz) { assert.equal(typeof quiz, string)})
    //assert.equal(typeof quiz.getQuestionData("name"), 'string');
  })
  it('should return a JSON string that converts to an object containing a key of name which contains a string', function(){
    var questions = (JSON.parse(quiz.getQuestionData("name")))
    //console.log(questions[1].name)

    assert.equal(typeof questions[1].name, 'string')
  })
  it('should return a JSON string of all element names', function(){
    var questions = (JSON.parse(quiz.getQuestionData("name")))

  })
})
