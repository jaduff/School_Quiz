var chai = require("chai");
var assert = require('chai').assert
var should = chai.should();
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var _chemicalModel = require('../app/models/chemicals.server.model.js');

var datafile = "./test/chemdata.json"

var test_array = [
  {"chemicalName": "Chlorine", "chemicalSymboll": "Cl"},
  {"chemicalName": "Hydrogen", "chemicalSymbol": "H"}
];

beforeEach(function(done){
  chemicalModel = new _chemicalModel();
  chemicalModel.datafile = datafile;

  var JSONio = require('../app/library/jsonio');
  jsonio = new JSONio();
  jsonio.save(datafile, test_array)

  done()
})

describe('chemicalModel', function(){
  it('should be a valid class', function(){
    chemicalModel.should.be.a('object')
  })

describe('chemicalModel.getChemicals()', function(){
  it('should be a valid function', function(){
    chemicalModel.getChemicals.should.be.a('function')
  })
  it('should eventually return an array', function(){
    return chemicalModel.getChemicals(chemicalModel.datafile).should.eventually.be.a('array')
  })
  it('should throw an error when passed an invalid file', function(){
    return chemicalModel.getChemicals("./invalidfile.json").catch(function(err){
      err.should.be.a('error')
    })
  })
  it('should throw an error of ENOENT when passed an invalid file', function(){
    return chemicalModel.getChemicals("./invalidfile.json").catch(function(err){
      err.code.should.equal('ENOENT')
    })
  })
})

describe('chemicalModel.save()', function(){
  it('should be a valid function', function(){
    chemicalModel.save.should.be.a('function')
  })
  it('should return success code when passed array and valid file', function () {
    //return chemicalModel.save(datafile, test_array).should.eventually.be.a('string')
    return chemicalModel.save(datafile, test_array).should.eventually.be.a('string')
  });
  it('should return error code when passed null array', function () {
    return chemicalModel.save(datafile, null).should.be.rejectedWith(Error)
  });
  it('should return error code when passed a string', function () {
    return chemicalModel.save(datafile, "string").should.be.rejectedWith(Error)
  });
})

})
