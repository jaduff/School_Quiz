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
    describe('listFiles("elements")', function(){
      it('should eventually return an array with a length of 25', function(){
        return quiz.listFiles().should.eventually.have.length.of(25)
      })
      it('should eventually return an array with all the elements', function(){
        quiz.listFiles(function(err, list){
          if (err) throw err;
            quiz.listfiles().should.contain("aluminium")
            quiz.listfiles().should.contain("chlorine")
            quiz.listfiles().should.contain("barium")
            quiz.listfiles().should.contain("bromine")
            quiz.listfiles().should.contain("calcium")
            quiz.listfiles().should.contain("chromium")
            quiz.listfiles().should.contain("cobalt")
            quiz.listfiles().should.contain("copper")
            quiz.listfiles().should.contain("fluorine")
            quiz.listfiles().should.contain("gold")
            quiz.listfiles().should.contain("hydrogen")
            quiz.listfiles().should.contain("iron")
            quiz.listfiles().should.contain("lead")
            quiz.listfiles().should.contain("magnesium")
            quiz.listfiles().should.contain("mercury")
            quiz.listfiles().should.contain("nickel")
            quiz.listfiles().should.contain("nitrogen")
            quiz.listfiles().should.contain("oxygen")
            quiz.listfiles().should.contain("phosphorus")
            quiz.listfiles().should.contain("potassium")
            quiz.listfiles().should.contain("silver")
            quiz.listfiles().should.contain("sodium")
            quiz.listfiles().should.contain("sulfur")
            quiz.listfiles().should.contain("tin")
            quiz.listfiles().should.contain("zinc")
          })
      })
    })
  })

})
