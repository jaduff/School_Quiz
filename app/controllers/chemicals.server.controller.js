exports.render = function(req, res) {
  chemicalModel = require('../models/chemicals.server.model.js');
  chemicalModel = new chemicalModel();
  chemicalModel.datafile = "./app/models/data/chemdata.json"

  switch (req.query.page){
    case "CRUD":
      controlCRUD(req, res);
      break;
    default:
      res.render('elements', {
      title: 'Chemical Element Quiz'})
  }

};

function controlCRUD(req, res){
  switch(req.query.action){
    case "add":
      res.render('chemicalCRUDadd', {
      title: 'Add Chemical Elements'
      })
    break;
    case "save":
      var chemicalObject = {"chemicalName": req.query.chemicalName, "chemicalSymbol": req.query.chemicalSymbol}
      console.log("about to save")
      var tmparray = chemicalModel.getChemicals(chemicalModel.datafile)
      return chemicalModel.save(chemicalModel.datafile, chemicalObject).then(function(saveCode){
        if(saveCode != "saved"){
          res.render('chemicalCRUDadd', {
          title: 'Add Chemical Elements',
          message: 'Invalid ' + saveCode,
          chemicalName: req.query.chemicalName,
          chemicalSymbol: req.query.chemicalSymbol
          })
        }else{
          res.redirect("/quizzes/elements?page=CRUD")
        }
      }).catch(function(err){
        console.log("An unhandled error occurred: " +err)
        res.render('error', {
          message: 'A serious error has occurred.',
          err: err
        })
      })
    break;
    default: //display the list of chemicals
      renderChemicalList(res)
  }

}

function renderChemicalList(res){
  console.log("renderChemicalList")
  chemicalModel.getChemicals(chemicalModel.datafile).then(function(chemicalArray){
    console.log("getChemicals promise.then " +chemicalArray.toString())
    res.render('chemicalCRUD', {
    title: 'Modify Chemical Elements',
    /*chemicalList: [
      {"chemicalName": "Chlorine", "chemicalSymboll": "Cl"},
      {"chemicalName": "Hydrogen", "chemicalSymbol": "H"}
    ]*/
    chemicalList: chemicalArray
    })
  }).catch(function(err){
    switch (err.code){
      case "ENOENT":
        console.log("chemdata file doesn't exist")
        res.render('chemicalCRUD', {
        title: 'Modify Chemical Elements',})
      break;
      default:
        console.log("An unhandled error occurred: " +err)
        res.render('error', {
          message: 'A serious error has occurred.',
          err: err
      })
    }

  })
}
