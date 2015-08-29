exports.render = function(req, res) {
  chemicalModel = require('../models/chemicals.server.model.js');
  chemicalModel = new chemicalModel();

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
      chemicalModel.save(chemicalObject).then(function(saveCode){
        if(saveCode != "saved"){
          res.render('chemicalCRUDadd', {
          title: 'Add Chemical Elements',
          message: 'Invalid ' + saveCode,
          chemicalName: req.query.chemicalName,
          chemicalSymbol: req.query.chemicalSymbol
          })
        }else{
          renderChemicalList(res)
        }
      })
    break;
    default: //display the list of chemicals
    renderChemicalList(res)
  }

}

function renderChemicalList(res){
  chemicalModel.getChemicals().then(function(chemicalArray){
    res.render('chemicalCRUD', {
    title: 'Modify Chemical Elements',
    chemicalList: {"chemicalArray": [{"chemicalName":"Chlorine","chemicalSymbol":"Cl"},{"chemicalName": "Hydrogen", "chemicalSymbol": "H"}]} //chemicalArray
    })
  }).catch(function(err){
    console.log(err)
    res.render('error', {
      message: 'A serious error has occurred.',
      error: err
    })
  })
}
