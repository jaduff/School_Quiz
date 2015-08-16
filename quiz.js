module.exports = function Quiz(){
  var fs = require('fs')
  this.getQuestionData = function(questionType){

      //return this.getFiles().then(this.readFiles(list))
      return this.getFiles().then(function(list){
        var promises = list.map(function (file) {
          return new Promise(function (resolve, reject){
            file = "./data/" +file
              fs.readFile(file, function (err, data) {
                if (err) {
                  return reject(err)
                }
                JSON.stringify(data)
                resolve(data)
              });
          })
        })
        return Promise.all(promises)
      })
}

//asynchronously get list of .json files in directory. Return as a promise.
  this.getFiles = function(){
    return new Promise(function (resolve, reject) {
      fs.readdir('./data', function (err, list) {
        if (err) {
          return reject(err);
        }
        var reg = /\.json$/i
        var JSONList = list.filter(function(i){
          if (reg.test(i)){return i}
        })
        resolve(JSONList);
      });
    })

  }

/*asynchronously iterate through list of files given and read their contents.
Return as a map of promises that resolve to the contents of each file.
*/
/* //This doesn't work at the moment.
  this.readFiles = function(list){
    var promises = list.map(function (file) {
      return new Promise(function (resolve, reject){
        file = "./data/" +file
          fs.readFile(file, function (err, data) {
            if (err) {
              return reject(err)
            }
            resolve(data)
          });
      })
    })
    return Promise.all(promises)
  }

*/
}
