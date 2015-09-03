module.exports = function JSONio(){

//this.save(array of objects)
//this.load() returns an array
  var fs = require('fs');

  this.save = function save(datafile, dataObject){
    that.load(datafile).then(function(dataArray){
      console.log("Dataarray is " +dataArray)
      dataArray.push(dataObject)
      return new Promise(function(resolve, reject){
        fs.writeFile(datafile, JSON.stringify(dataArray), function(err){
          if (err) return reject(err);
          resolve("saved")
        })
      })
    }).catch(function(err){
      reject(err)
    })

  }


  this.load = function load(datafile){
    return new Promise(function(resolve, reject){
      fs.readFile(datafile, function(err, data){
        if (err) {
          if (err.code == 'ENOENT') resolve([])
          return reject(err)
        }
        data = data.toString()
        data = JSON.parse(data)
        resolve(data)
      })
    })
  }

}
