module.exports = function Quiz(){
  var promisify, readfile, fs, datadir;
  promisify = require("es6-promisify"); //https://www.npmjs.com/package/es6-promisify
  fs = require('fs')
  readdir = promisify(fs.readdir)
  readfile = promisify(fs.readFile)
  datadir = "./data"

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
      return readfile(datadir + "/" + file, "utf-8")
    })
    return Promise.all(promises)
  }

}
