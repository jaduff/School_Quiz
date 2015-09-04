module.exports = function chemicalModel(){
  var promisify, fs, iz, jsonio;
  var JSONio = require('../library/JSONio')
  fs = require('fs')

  this.datafile = null
  this.chemArray = null

  iz = require('iz')
  jsonio = new JSONio();

  this.getChemicals = function (datafile){
    return promise = new Promise(function(resolve, reject){
      jsonio.load(datafile).then(function(chemarray){
        console.log("chemarray is "+chemarray)
        debugger;
        //this.chemicals = chemarray
        return resolve(chemarray)
      }).catch(function(err){
        console.log("chemicalModel.getChemicals .catch error function")
        reject(err)
      })
    })
  }

  this.save = function(datafile, chemObject){
    console.log("in save function")
    return promise = new Promise(function(resolve, reject){
      debugger;
      console.log("in save promise")
      if (validateChemObject(chemObject) == false) {
        return reject(new Error("Not an array")
      )}
      console.log("passed validation")
      jsonio.save(datafile, chemObject).then(function(res){
        console.log("jsonio.save returned "+res)
        if (res == "saved") {
          return resolve(res)
        }else{
          return reject(new Error("Failed to save"))
        }
      }).catch(function(err){
        console.log("chemicalModel.save .catch error function")
        reject(err)
      })
    })
  }

  function validateChemObject(chemObject){
    console.log("about to validate")
    if (chemObject == null) return false;
    if (typeof(chemObject) == 'object') return true;
    return false;
  }

}
