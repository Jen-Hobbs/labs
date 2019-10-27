const express = require('express');
let mod = require('../peopleData');

const router = express.Router();
console.log("testing load of peoples");

router.get('/peoples', function (req,res) {
    let information = mod.getall();
    res.render('peoples', {eachPerson:information});
    });
router.post('/peoples/startSearch', (req, res) =>{
    let search = req.body.searchName;
    console.log(search);
    mod.searchPeople(search);
    res.redirect(301, '/peoples');
});
router.post('/peoples/add', (req, res) => {
   let p_name = req.body.name;
   let p_about = req.body.about;
   let p_imageURL = req.body.imageURL;
    console.log(p_name);
   let pOject = {
      name: p_name,
      about: p_about,
      url: p_imageURL
   }
   mod.add(pOject);
   res.redirect(301, '/peoples');
});

module.exports = router;