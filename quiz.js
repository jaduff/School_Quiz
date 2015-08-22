module.exports = function Quiz(){
  var promisify, readfile, fs, datadir;
  promisify = require("es6-promisify"); //https://www.npmjs.com/package/es6-promisify
  fs = require('fs')
  readdir = promisify(fs.readdir)
  readfile = promisify(fs.readFile)
  datadir = "./data"

  this.chemicals = null

  this.getChemicals = function(request){
    switch(request){
      case "name":
        return this.getChemicals().then(function(data){
          data = data.map(function(chemical){
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
    })
  }

  this.readfiles = function(list){
    var promises = list.map(function(file){
      return readfile(datadir + "/" + file, "utf-8").then(function(data){
        if (data){return JSON.parse(data)}
        throw new Error("Empty json file: " + file)
      })
    })
    return Promise.all(promises)
  }

}
