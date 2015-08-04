module.exports = function Quiz(){
  this.getQuestionData = function(questionType, callback){
    /*var json = '{ "1": {"name": "Sodium"},
                  "2": {"name": "Potassium"}
                }' */

    var fs = require('fs')
    var path = require('path')
    var filePath = "./data/"


      var quiz = []
    fs.readdir(filePath, function (err, list) {
        var counter = 0
      list.forEach(function (file) {
        if (path.extname(file) === '.json'){
          //console.log(filePath + file)
          fs.readFile(filePath + file, 'utf8', function (err, data) {
            if (err) {throw err;}
            //var chemical = JSON.parse(data);
            //console.log(chemical)
            quiz.push(data)
          });
        }
        counter++
        if (counter == list.length){
          callback(JSON.stringify(quiz))
        }
      });
      if (err) reject(err)
    })
  }

}
