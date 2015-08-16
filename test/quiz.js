var chai = require("chai");
var assert = require('chai').assert
var should = chai.should();
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var Quiz = require("../quiz.js"); //quiz module

describe('quiz class', function(){
  var quiz = new Quiz("elements");
  it('should be a valid class', function(){
    assert.equal(typeof quiz, 'object');
  });
  it('should return a JSON string', function(){
    return quiz.getQuestionData("name").should.eventually.be.a('array')
    //quiz.getQuestionData("name")
    //assert.equal(typeof data, 'string');
  })

  it('should return a JSON string that converts to an object containing a key of name which contains a string', function(){
    return quiz.getQuestionData("name").then(function(quiz){
      var questions = (quiz.toString())
      //console.log("queston is " + questions)
      assert.equal(typeof questions[1].name, 'string')
    })
  })
  it('should return a JSON string of all element names', function(){
    //quiz.getQuestionData("name", function(quiz) { assert.equal(typeof quiz, string)})
    return quiz.getQuestionData("name").then(function(quiz){
      //console.log(quiz.toString())
    })

  })
  describe('getFiles', function(){
    it('should return a list of files', function(){
      quiz.getFiles().should.eventually.be.a('list')

    })
  })
  describe('readFiles', function(){
    it('should return a list of JSON objects', function(){
      quiz.readFiles(["oxygen.json", "hydrogen.json"]).should.eventually.be.a('array')
    })
  })
})
