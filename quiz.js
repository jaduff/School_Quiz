module.exports = function Quiz(){
  var promisify, readfile, fs, datadir;
  promisify = require("es6-promisify"); //https://www.npmjs.com/package/es6-promisify
  fs = require('fs')
  readdir = promisify(fs.readdir)
  readfile = promisify(fs.readFile)
  datadir = "./data"

this.listFiles = function(callback){
  return readdir(datadir).then(readfiles)
}

function readfiles(list){
    var reg = /\.json$/i
    var JSONList = list.filter(function(i){
      if (reg.test(i)){return i}
    })
    console.log(JSONList)
    return JSONList
}

/*
  this.listFiles = function(){
    return new Promise(function (resolve, reject){
      readdir(datadir).map(function(filename){
          var reg = /\.json$/i
          var JSONList = list.filter(function(i){
            if (reg.test(i)){return readfile(datadir + "/" + filename)}
          })
        })
      var list = ["chlorine", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      resolve(list)
    })
    .then(function(list){
      console.log(list)
    })
  }*/
}
