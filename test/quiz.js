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
      //return quiz.listFiles().should.eventually.be.a('array')
      quiz.listFiles(function(err, list){
        if (err) throw err;
        list.should.be.a('array')
      })
    })
    it('should eventually return an array with a size greater than 0', function(){
      //return quiz.listFiles().should.eventually.have.length.above(0)
      quiz.listFiles(function(err, list){
        if (err) throw err;
        list.should.have.length.above(0)
      })
    })
    it('should eventually return an array containing "chlorine"', function(){
      //return quiz.listFiles().should.eventually.contain("chlorine")
      quiz.listFiles(function(err, list){
        if (err) throw err;
        list.should.contain("chlorine")
      })
    })
    describe('listFiles("elements")', function(){
      it('should eventually return an array with a length of 25', function(){
        //return quiz.listFiles().should.eventually.have.length.of(25)
        quiz.listFiles(function(err, list){
          if (err) throw err;
          list.should.have.length.of(25)
        })
      })
      it('should eventually return an array with all the elements', function(){
        quiz.listFiles(function(err, list){
          if (err) throw err;
            list.should.contain("aluminium")
            list.should.contain("chlorine")
            list.should.contain("barium")
            list.should.contain("bromine")
            list.should.contain("calcium")
            list.should.contain("chromium")
            list.should.contain("cobalt")
            list.should.contain("copper")
            list.should.contain("fluorine")
            list.should.contain("gold")
            list.should.contain("hydrogen")
            list.should.contain("iron")
            list.should.contain("lead")
            list.should.contain("magnesium")
            list.should.contain("mercury")
            list.should.contain("nickel")
            list.should.contain("nitrogen")
            list.should.contain("oxygen")
            list.should.contain("phosphorus")
            list.should.contain("potassium")
            list.should.contain("silver")
            list.should.contain("sodium")
            list.should.contain("sulfur")
            list.should.contain("tin")
            list.should.contain("zinc")
          })
      })
    })
  })

})
