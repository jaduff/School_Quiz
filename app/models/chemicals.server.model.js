module.exports = function chemicalModel(){
  var promisify, fs, iz, jsonio;
  var JSONio = require('../library/JSONio')
  //promisify = require("es6-promisify"); //https://www.npmjs.com/package/es6-promisify
  fs = require('fs')
  //readfile = promisify(fs.readFile)

  this.datafile = null
  this.chemArray = null

  iz = require('iz')
  jsonio = new JSONio();

  this.getChemicals = function (datafile){
    return promise = new Promise(function(resolve, reject){
      jsonio.load(datafile).then(function(chemarray){
        console.log("chemarray is "+chemarray)
        this.chemicals = chemarray
        resolve(chemarray)
      }).catch(function(err){
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
      jsonio.save(datafile, chemObject).then(function(){
        return resolve("success")
      }).catch(function(err){
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
