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
      return quiz.listFiles().then(function(){
        var reg = /\.json$/i
        list.foreach(function(filename){
          if (reg.test(filename) == false){throw "Not a .json file"}
        })
      })
    })

    describe('listFiles("elements")', function(){
      it('should eventually return an array with a length of 25', function(){
        return quiz.listFiles().should.eventually.have.length.of(25)
      })
      it('should eventually return an array with all the elements', function(){
            return quiz.listFiles().should.eventually.contain("aluminium")
            return quiz.listFiles().should.eventually.contain("barium")
            return quiz.listFiles().should.eventually.contain("bromine")
            return quiz.listFiles().should.eventually.contain("calcium")
            return quiz.listFiles().should.eventually.contain("chlorine")
            return quiz.listFiles().should.eventually.contain("chromium")
            return quiz.listFiles().should.eventually.contain("cobalt")
            return quiz.listFiles().should.eventually.contain("copper")
            return quiz.listFiles().should.eventually.contain("fluorine")
            return quiz.listFiles().should.eventually.contain("gold")
            return quiz.listFiles().should.eventually.contain("hydrogen")
            return quiz.listFiles().should.eventually.contain("iron")
            return quiz.listFiles().should.eventually.contain("lead")
            return quiz.listFiles().should.eventually.contain("magnesium")
            return quiz.listFiles().should.eventually.contain("mercury")
            return quiz.listFiles().should.eventually.contain("nickel")
            return quiz.listFiles().should.eventually.contain("nitrogen")
            return quiz.listFiles().should.eventually.contain("oxygen")
            return quiz.listFiles().should.eventually.contain("phosphorus")
            return quiz.listFiles().should.eventually.contain("potassium")
            return quiz.listFiles().should.eventually.contain("silver")
            return quiz.listFiles().should.eventually.contain("sodium")
            return quiz.listFiles().should.eventually.contain("sulfur")
            return quiz.listFiles().should.eventually.contain("tin")
            return quiz.listFiles().should.eventually.contain("zinc")
      })
    })
  })

})
