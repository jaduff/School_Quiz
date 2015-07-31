module.exports = function Chemical(name, symbol, valence){
  this.name = name;
  this.symbol = symbol;
  this.valence = valence;
  this.getName = function(){
    if (!name){return "ERROR"};
    return name;
  }

  this.getSymbol = function(){
    if (!symbol){return "ERROR"};
    return symbol;
  }

this.getValence = function(){
  if (!valence){return -100};
  return valence;
}
}
