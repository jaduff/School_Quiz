var assert = require("assert"); //node.js core module
var Chemical = require("../chemical.js");

//TESTING CHEMICAL CLASS

describe('Chemical Class', function(){
  var chemical = new Chemical();
  it('should be a valid class', function(){
    assert.equal(typeof chemical, 'object');
  });
  it('should return a string for this.getName()', function(){
    assert.equal(typeof chemical.getName(), 'string');
  })
  it('should return a string for this.getSymbol()', function(){
    assert.equal(typeof chemical.getSymbol(), 'string');
  })
  it('should return a number for this.getValence()', function(){
    assert.equal(typeof chemical.getValence(), 'number');
  })
})

describe('Sodium', function(){
  var chemical = new Chemical("Sodium", "Na", 1);
  it('should be a valid class', function(){
    assert.equal(typeof chemical, 'object');
  });
  it('should return a string of Sodium for this.getName()', function(){
    assert.equal(typeof chemical.getName(), 'string');
    assert.equal(chemical.getName(), "Sodium");
  })
  it('should return a string of Na for this.getSymbol()', function(){
    assert.equal(chemical.getSymbol(), 'Na');
  })
  it('should return a number of 1 for this.getValence()', function(){
    assert.equal(chemical.getValence(), 1);
  })
})

describe('Potassium', function(){
  var chemical = new Chemical("Potassium", "K", 1);
  it('should be a valid class', function(){
    assert.equal(typeof chemical, 'object');
  });
  it('should return a string of Potassium for this.getName()', function(){
    assert.equal(typeof chemical.getName(), 'string');
    assert.equal(chemical.getName(), "Potassium");
  })
  it('should return a string of Na for this.getSymbol()', function(){
    assert.equal(chemical.getSymbol(), 'K');
  })
  it('should return a number of 1 for this.getValence()', function(){
    assert.equal(chemical.getValence(), 1);
  })
})
