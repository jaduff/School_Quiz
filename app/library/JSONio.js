module.exports = function JSONio(){

//this.save(array of objects)
//this.load() returns an array
  var fs = require('fs');

  this.save = function save(datafile, dataObject){
    var that = this;
    return that.load(datafile).then(function(dataArray){
      dataArray.push(dataObject)
      return new Promise(function(resolve, reject){
        try {
          fs.unlinkSync(datafile)
        }
        catch(err) {
          console.log("Error code is "+err.code)
          if (err.code != 'ENOENT') {
            console.log(err)
            throw err}
        }
        fs.writeFile(datafile, JSON.stringify(dataArray), function(err){
          if (err) return reject(err);
          resolve("saved")
        })
      })
    }).catch(function(err){
      throw(err)
    })

  }


  this.load = function load(datafile){
    console.log("I made it to the load function!")
    return new Promise(function(resolve, reject){
      fs.readFile(datafile, function(err, data){
        if (err) {
          if (err.code == 'ENOENT') {
            return resolve([])
          }
          return reject(err)
        }
        console.log("data is "+data)
        data = data.toString()
        if (data == ""){
          data = []
        }else{
          data = JSON.parse(data)
        }
        return resolve(data)
      })
    })
  }

}
