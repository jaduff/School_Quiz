module.exports = function Chemical(name, symbol, valence){
  if (typeof(name) !== 'string'){throw new Error("Name must be a string")}
  if (typeof(symbol) !== 'array'){throw new Error("Symbol must be an array")}
  if (typeof(valence) !== 'array'){throw new Error("Valence must be an array")}
  this.name = name;
  this.symbol = symbol;
  this.valence = valence;
  this.getName = function(){
    if (!name){throw new Error("Name not defined")};
    return name;
  }

  this.getSymbol = function(){
    if (!symbol){throw new Error("Symbol not defined")};
    return symbol;
  }

this.getValence = function(){
  if (!valence){throw new Error("Valence not defined")};
  return valence;
}
}
