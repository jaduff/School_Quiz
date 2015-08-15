module.exports = function Quiz(){
  //promisify = require("es6-promisify");
  this.getQuestionData = function(questionType){
    /* return ALL the data available for a particular queston type, so client
      can process either a set number of question, or continuous questions until
      stopped */
      //return this.getFiles().then(this.readFiles(list))
      return this.getFiles().then(this.readFiles(list))
}

  this.getFiles = function(){
    var fs = require('fs')
    return new Promise(function (resolve, reject) {
      fs.readdir('./data', function (err, list) {
        if (err) {
          return reject(err);
        }
        resolve(list);
      });
    })

  }

  this.readFiles = function(list){
    var promises = list.map(function (file) {
      return new Promise(function (resolve, reject){
        file = "./data/" +file
          fs.readFile(file, function (err, data) {
            console.log("readfile")
            if (err) {
              return reject(err)
            }
            console.log("data is: " + data)
            resolve(data)
          });
      })
    })
    return Promise.all(promises)
  }

  //read JSON files, process into objects, return to getQuestionData
}
