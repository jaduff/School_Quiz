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

})
