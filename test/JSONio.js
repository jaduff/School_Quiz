var chai = require("chai");
var assert = require('chai').assert
var should = chai.should();
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
fs=require('fs')

var JSONio = require('../app/library/JSONio.js')
var testfile = "./test/jsoniotestfile.json"
var testGETfile = "./test/jsonioGETtestfile.json"
var test_array = [{"chemicalName":"Hydrogen","chemicalSymbol":"H"}, {"chemicalName":"Chlorine","chemicalSymbol":"Cl"}]
var test_object = {"chemicalName": "Hydrogen", "chemicalSymbol": "H"}

describe('JSONio test', function(){
  var jsonio = new JSONio();

  it('should be a valid class', function(){
    jsonio.should.be.a('object');
  })

  describe('JSONio.save', function(){
    it('should be a valid function', function(){
      jsonio.save.should.be.a('function')
    })
    it('should create a file ' +testfile, function(){
      try {
      fs.unlinkSync(testfile)
    } catch(err){
      switch(err.code){
        case "ENOENT":
        break;
        default:
          throw(err)
      }
    }
    debugger;
        return jsonio.save(testfile, test_object).then(function(response){
          console.log("response is "+response)
          response.should.equal("saved")
        }).catch(function(err){
          console.log(err)
          throw(err);
        });

    })
  })

  describe('JSONio.load', function(){
    it('should be a valid function', function(){
      jsonio.load.should.be.a('function')
    })
    it('should equal test_array', function(){
      jsonio.load(testGETfile).then(function(data){
        data.should.equal(test_array)
      })
    })
    it('should return an error when an invalid file is given', function(){
      return jsonio.load("nofile.json").then(function(res){
        res.should.be.a('error')}).catch(function(err){
        err.should.be.a('error')
      })
    })
  })

})
