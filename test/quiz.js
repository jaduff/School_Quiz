var assert = require("assert"); //node.js core module
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

var Quiz = require("../quiz.js"); //quiz module

describe('quiz class exists', function(){
  var quiz = new Quiz("elements");
  it('should be a valid class', function(){
    assert.equal(typeof quiz, 'object');
  });
  it('should return a JSON string', function(){
    return quiz.getQuestionData("name").should.eventually.have.typeof.string
    //quiz.getQuestionData("name")
    //assert.equal(typeof data, 'string');
  })

  it('should return a JSON string that converts to an object containing a key of name which contains a string', function(){
    return quiz.getQuestionData("name").then(function(quiz){
      var questions = (JSON.parse(quiz))
      console.log("queston is " + questions)
      assert.equal(typeof questions[1].name, 'string')
    })
  })
  it('should return a JSON string of all element names', function(){
    //quiz.getQuestionData("name", function(quiz) { assert.equal(typeof quiz, string)})
    return quiz.getQuestionData("name").then(function(quiz){

    })

  })
})
