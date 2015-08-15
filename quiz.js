module.exports = function Quiz(){
  promisify = require("es6-promisify");
  this.getQuestionData = function(questionType){
    /* return ALL the data available for a particular queston type, so client
      can process either a set number of question, or continuous questions until
      stopped */
      return loadData().then(function(){console.log("Promises function")})
}

function loadData(){
    var fs = require('fs')
    var path = require('path')
    var filePath = "./data/"
    return Promise.promisify(fs.readdir)
    .then(function(list){
      dataFiles = readdir_promise( "./data")
      dataFiles.then(function (list){console.log(list)})
      return dataFiles
    })
  //read JSON files, process into objects, return to getQuestionData
}

}
