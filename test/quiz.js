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

  describe('listFiles', function(){
    var quiz = new Quiz("elements")
    it('should eventually return an array', function(){
      return quiz.listFiles().should.eventually.be.a('array')
    })
    it('should eventually return an array with a size greater than 0', function(){
      return quiz.listFiles().should.eventually.have.length.above(0)
    })
    it('should eventually return an array containing "chlorine"', function(){
      return quiz.listFiles().should.eventually.contain("chlorine.json")
    })
    it('should not return any files that do NOT contain .json', function(){
      //this possibly doesn't return a promise.
      return quiz.listFiles().then(function(list){
        console.log(typeof(list))
        var reg = /\.json$/i
        list.forEach(function(filename){
          if (reg.test(filename) == false){throw "Not a .json file"}
        })
      })
    })

    describe('listFiles("elements")', function(){
      it('should eventually return an array with a length of 25', function(){
        return quiz.listFiles().should.eventually.have.length.of(25)
      })
      it('should eventually return an array with all the elements', function(){
            return quiz.listFiles().should.eventually.contain("zinc.json")
      })
    })
    describe('readfiles(file)', function(){
      var list = ["chlorine.json", "hydrogen.json"]
      it('should return the data', function(){
        return quiz.readfiles(list).should.eventually.have.length.of(2)
      })
    })
  })

})
