module.exports = function Quiz(){
  this.getQuestionData = function(questionType){
    /*var json = '{ "1": {"name": "Sodium"},
                  "2": {"name": "Potassium"}
                }' */

    var fs = require('fs')
    var path = require('path')
    var filePath = "./data/"
    var quiz = new Array()

    fs.readdir(filePath, function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.json')
          //console.log(filePath + file)
          fs.readFile(filePath + file, 'utf8', function (err, data) {
            if (err) throw err;
            var chemical = JSON.parse(data);
            //console.log(chemical)
            quiz.push(chemical)
          });
      })
    })
    console.log("quiz= " +quiz)
    console.log("JSON Quiz= " +JSON.stringify(quiz))
    return JSON.stringify(quiz)
  }
}
