module.exports = function chemicalModel(){
  var promisify, readfile, fs, datadir, iz;
  promisify = require("es6-promisify"); //https://www.npmjs.com/package/es6-promisify
  fs = require('fs')
  readfile = promisify(fs.readFile)
  datadir = "./app/models/data/"
  iz = require('iz')

  this.chemicals = null


function readdir(directory){
  return new Promise(function(resolve, reject){
    fs.readdir("./app/models/data", function(err, res){
      //console.log(err)
      if (err) {reject(new Error(err))};
      resolve(res)
    })
  })
}


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
        if (this.chemicals){
          //return a promise that resolves instantly, so that return is always a promise.
          return chemicals = new Promise(function(resolve, reject){
            resolve(this.chemicals)
          })
        }
        //if this.chemicals hasn't been set yet (is null), get data for it through promises.
        return this.listFiles().then(this.readfiles).then(function(data){
          this.chemicals = data
          return this.chemicals})
    }

  }

  this.listFiles = function(){
    return readdir(datadir).then(function(list){
      var reg = /\.json$/i
      var JSONList = list.filter(function(i){
        if (reg.test(i)){return i}
      })
      return JSONList
    }).catch(function(err){
      throw new Error("Error: " +err)
    })
  }

  this.readfiles = function(list){
    var promises = list.map(function(file){
      return readfile(datadir + "/" + file, "utf-8").then(function(data){
        if (data){return JSON.parse(data)}
          throw new Error("Empty json file: " + file)
      }).catch(function(err){
        throw new Error("Error: " + err)
      })
    })
    return Promise.all(promises)
  }

  this.save = function(chemicalObject){

    return new Promise(function(resolve, reject){

      if (!typeof(chemicalObject) == 'object'){reject(new Error("Invalid chemical"))}
      if(!iz.alphaNumeric(chemicalObject.chemicalName) || iz.blank(chemicalObject.chemicalName)){reject(new Error("chemicalName"))}
      if(!iz.alphaNumeric(chemicalObject.chemicalSymbol) || iz.blank(chemicalObject.chemicalSymbol)){reject(new Error("chemicalSymbol"))}
      if (!chemicalObject.chemicalSymbol){reject(new Error("chemicalSymbol"))}

      fs.writeFile(datadir + "/" + chemicalObject.chemicalName + ".json", chemicalObject.toString(), { flags: 'wx' }, function (err) {
        if (err) throw err;
        console.log("It's saved!");
        resolve("saved")
      });
    })
  }

}
