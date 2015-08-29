module.exports = function chemicalModel(){
  var promisify, fs, datadir, iz;
  //promisify = require("es6-promisify"); //https://www.npmjs.com/package/es6-promisify
  fs = require('fs')
  //readfile = promisify(fs.readFile)
  datafile = "./app/models/data/chemdata.json"
  iz = require('iz')

  this.chemicals = null


  this.getChemicals = function(request){
    switch(request){
      case "name":
        return this.getChemicals().then(function(data){
          return data = data.map(function(chemical){
            return chemical.name
          })
        })
        break;
      default:

        return chemicals = new Promise(function(resolve, reject){
          if (!this.chemicals){
            fs.readFile(datafile, function(err, data){
              if (err){
                reject(err)
              }
              this.chemicals = data.toString()
              resolve(this.chemicals)
            })
          }else{
          resolve(this.chemicals)}

        })
    }

  }

  this.save = function(chemicalObject){
    return new Promise(function(resolve, reject){

      if (!typeof(chemicalObject) == 'object'){reject(new Error("Invalid chemical"))}
      if(!iz.alphaNumeric(chemicalObject.chemicalName) || iz.blank(chemicalObject.chemicalName)){reject(new Error("chemicalName"))}
      if(!iz.alphaNumeric(chemicalObject.chemicalSymbol) || iz.blank(chemicalObject.chemicalSymbol)){reject(new Error("chemicalSymbol"))}
      if (!chemicalObject.chemicalSymbol){reject(new Error("chemicalSymbol"))}
      fs.writeFile(datafile, JSON.stringify(chemicalObject), { flags: 'wx' }, function (err) {
        if (err) reject(err);
        console.log("It's saved!");
        resolve("saved")
      });
    })
  }

}
