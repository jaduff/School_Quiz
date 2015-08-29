var chai = require("chai");
var assert = require('chai').assert
var should = chai.should();
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var _chemicalModel = require('../chemicals.server.model.js');

beforeEach(function(){
  this.chemicalModel = new _chemicalModel();
})

describe('chemicalModel', function(){
  it('should be a valid class', function(){
    this.chemicalModel.should.be.a('object')
  })

  describe('listFiles', function(){
    it('should eventually return an array', function(){
      return  this.chemicalModel.listFiles().should.eventually.be.a('array')
    })
    it('should not return any files that do NOT contain .json', function(){
      //this possibly doesn't return a promise.
      return  this.chemicalModel.listFiles().then(function(list){
        var reg = /\.json$/i
        list.forEach(function(filename){
          if (reg.test(filename) == false){throw "Not a .json file"}
        })
      })
    })

  })

  describe('getChemicals', function(){
    it('should get and return data if this.chemicals is null', function(){
       this.chemicalModel.chemicals = null
      return  this.chemicalModel.getChemicals().should.eventually.be.a('array')
    })
    it('should return an array', function(){
       this.chemicalModel.getChemicals("name").should.eventually.be.a('array')
       this.chemicalModel.getChemicals("name").should.eventually.have.length.of(26)
    })
    it('should return an array or strings', function(){
      return  this.chemicalModel.getChemicals("name").then(function(data){
        data.forEach(function(chemical){
          assert.equal(typeof(chemical), "string")
        })
      })
    })
  })

})
